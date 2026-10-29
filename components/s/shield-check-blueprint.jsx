import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c16lvpbmd.css';
import '../../css/a/awqpd6bay.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/p/p29my7dtm.css';
import '../../css/r/rl0hurbau.css';
import '../../css/t/t2d-3xa1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="c16lvpbmd wm-deco"/><path class="awqpd6bay wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="p29my7dtm wm-k"/><path class="rl0hurbau wm-a"/><path class="t2d-3xa1h wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-check-blueprint"} {...others} />);
}

export default Component;
