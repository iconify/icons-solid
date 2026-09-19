import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge4x5w0yg.css';
import '../../css/m/ma50-9zbw.css';
import '../../css/y/yzzk64yza.css';
import '../../css/d/dy4z9objq.css';
import '../../css/x/x3tzy5bjf.css';
import '../../css/q/quasufbyv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ge4x5w0yg"/><path class="ma50-9zbw"/><path class="yzzk64yza"/><path class="dy4z9objq"/><path class="x3tzy5bjf"/><path class="quasufbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:halo"} {...others} />);
}

export default Component;
