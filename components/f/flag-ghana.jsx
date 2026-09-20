import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/s/s-xxlii2p.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/m/mkek12bic.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="s-xxlii2p"/><path class="e_6_n4b0n"/><path class="mkek12bic"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-ghana"} {...others} />);
}

export default Component;
