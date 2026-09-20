import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/k7v6wxxvt.css';
import '../../css/e/e29_fccvd.css';
import '../../css/j/j7aezwb4v.css';
import '../../css/t/t4wdc2soy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="k7v6wxxvt"/><path class="e29_fccvd"/><path class="j7aezwb4v"/><path class="t4wdc2soy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:file-bookmark"} {...others} />);
}

export default Component;
