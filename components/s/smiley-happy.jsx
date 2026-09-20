import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjmd6lg4e.css';
import '../../css/j/j3a1jccqb.css';
import '../../css/v/vxlksgvbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rjmd6lg4e"/><path class="j3a1jccqb"/><path class="vxlksgvbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smiley-happy"} {...others} />);
}

export default Component;
