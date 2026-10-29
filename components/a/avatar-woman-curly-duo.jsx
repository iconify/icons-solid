import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/i/i2t4y9fwk.css';
import '../../css/m/mr_z7cbbr.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/n/nenasvbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="i2t4y9fwk wm-a"/><path class="mr_z7cbbr wm-a"/><path class="f2iz_pbwp"/><path class="d3y9mw6db"/><path class="nenasvbre wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-curly-duo"} {...others} />);
}

export default Component;
