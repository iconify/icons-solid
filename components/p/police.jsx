import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n9i-50t4a.css';
import '../../css/j/jcnwo03zf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="n9i-50t4a"/><path class="jcnwo03zf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:police"} {...others} />);
}

export default Component;
