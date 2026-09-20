import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txu5a_3fa.css';
import '../../css/n/nd3oembfa.css';
import '../../css/d/d4sgmebde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="txu5a_3fa"/><path class="nd3oembfa"/><path class="d4sgmebde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:dollar-circle3-filled"} {...others} />);
}

export default Component;
