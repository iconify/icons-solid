import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9p7iwbbm.css';
import '../../css/j/jx9s2c5xk.css';
import '../../css/p/p1f14pb6o.css';
import '../../css/f/fe87lbb6m.css';
import '../../css/t/tl775n2jy.css';
import '../../css/f/f-owq0h_p.css';
import '../../css/d/dy2817bjy.css';
import '../../css/g/gnlsiobem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v9p7iwbbm wm-shadow"/><path class="jx9s2c5xk wm-k"/><path class="p1f14pb6o wm-k"/><path class="fe87lbb6m wm-k"/><path class="tl775n2jy wm-k"/><path class="f-owq0h_p wm-k"/><path class="dy2817bjy wm-shine"/><path class="gnlsiobem wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:circle-check-big"} {...others} />);
}

export default Component;
