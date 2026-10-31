import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/f/fikzqccdp.css';
import '../../css/q/qnmn1acqc.css';
import '../../css/j/jfotdexah.css';
import '../../css/h/h0o0zqbqe.css';
import '../../css/k/k9y9_bc3y.css';
import '../../css/u/u2q__halu.css';
import '../../css/y/y3o719bqx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="fikzqccdp"/><path class="qnmn1acqc"/><path class="jfotdexah"/><path class="h0o0zqbqe"/><path clip-rule="evenodd" class="k9y9_bc3y"/><path clip-rule="evenodd" class="u2q__halu"/><path class="y3o719bqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:theater-pop"} {...others} />);
}

export default Component;
