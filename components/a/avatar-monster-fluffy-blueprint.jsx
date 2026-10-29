import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fgaqfsbrg.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/r/rweozib1u.css';
import '../../css/x/x5kvoacvm.css';
import '../../css/x/x82fbcc8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fgaqfsbrg wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="rweozib1u wm-k"/><path class="wm-a x5kvoacvm"/><path class="wm-k x82fbcc8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster-fluffy-blueprint"} {...others} />);
}

export default Component;
