import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hwlsp3bub.css';
import '../../css/q/q0kq_jvgv.css';
import '../../css/c/ci_sy1rqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="hwlsp3bub"/><path class="q0kq_jvgv"/><path class="ci_sy1rqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:plurk-logo-1"} {...others} />);
}

export default Component;
