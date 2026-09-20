import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/l/lef99f3qs.css';
import '../../css/o/ob-mf0bkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="lef99f3qs"/><path class="ob-mf0bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:command-button-keyboard"} {...others} />);
}

export default Component;
