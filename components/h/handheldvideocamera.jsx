import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es97rtbpl.css';
import '../../css/m/mhn45ibqb.css';
import '../../css/m/m2897mb0i.css';
import '../../css/z/zk30aempb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="es97rtbpl"/><path class="mhn45ibqb"/><circle class="m2897mb0i"/><path class="zk30aempb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:handheldvideocamera"} {...others} />);
}

export default Component;
