import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xyqs51b7j.css';
import '../../css/g/g8ld_8bog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xyqs51b7j"/><path class="g8ld_8bog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pen-tablet"} {...others} />);
}

export default Component;
