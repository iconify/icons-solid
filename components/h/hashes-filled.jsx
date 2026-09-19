import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg6y5jtyz.css';
import '../../css/j/jxx4uobjb.css';
import '../../css/z/z_q17jb9b.css';
import '../../css/z/zi2-bab_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mg6y5jtyz"/><path class="jxx4uobjb"/><path class="z_q17jb9b"/><path class="zi2-bab_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:hashes-filled"} {...others} />);
}

export default Component;
