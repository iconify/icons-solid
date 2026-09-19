import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dmy1ecbxg.css';
import '../../css/a/a0k4-acbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dmy1ecbxg"/><path class="a0k4-acbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bluetooth-tag"} {...others} />);
}

export default Component;
