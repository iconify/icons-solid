import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dalgnjpdy.css';
import '../../css/v/vrunflstg.css';
import '../../css/x/xh5iej9vb.css';
import '../../css/e/eqpexpb_m.css';
import '../../css/y/yj617eybb.css';
import '../../css/t/tnolhfsay.css';
import '../../css/p/pl33t8bsd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dalgnjpdy"/><path class="vrunflstg"/><path class="xh5iej9vb"/><circle class="eqpexpb_m"/><circle class="yj617eybb"/><circle class="tnolhfsay"/><circle class="pl33t8bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:frog"} {...others} />);
}

export default Component;
