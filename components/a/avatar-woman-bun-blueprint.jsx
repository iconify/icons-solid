import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cvvgp9bnq.css';
import '../../css/t/t64j7278z.css';
import '../../css/q/qk8m46y7r.css';
import '../../css/o/o9wp5rbfh.css';
import '../../css/h/h8opoubee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="cvvgp9bnq wm-deco"/><path class="t64j7278z wm-deco"/><path class="qk8m46y7r wm-deco"/><path class="o9wp5rbfh wm-k"/><path class="h8opoubee wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-bun-blueprint"} {...others} />);
}

export default Component;
