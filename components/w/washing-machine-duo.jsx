import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3yw06b5v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/te-6n-baq.css';
import '../../css/z/zl8cqbcxg.css';
import '../../css/q/qbvifnuxg.css';
import '../../css/p/pzop9j8jv.css';
import '../../css/n/n7t93sbni.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a3yw06b5v secondary"/><g class="dt0cm9dhy primary"><path class="te-6n-baq"/><path class="zl8cqbcxg"/><path class="qbvifnuxg"/><path class="pzop9j8jv"/><path class="n7t93sbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:washing-machine-duo"} {...others} />);
}

export default Component;
