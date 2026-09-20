import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/smqt6p0-g.css';
import '../../css/e/eubza2fut.css';
import '../../css/o/o5grrub_r.css';
import '../../css/l/lw7godbbw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="smqt6p0-g"/><rect class="eubza2fut"/><circle class="o5grrub_r"/><path class="lw7godbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-atm-card-2-deposit-money-payment-finance-atm-withdraw"} {...others} />);
}

export default Component;
