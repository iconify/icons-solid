import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mrcwihzjm.css';
import '../../css/y/y1woexb4f.css';
import '../../css/s/slxdt3n9x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="mrcwihzjm"/><circle class="y1woexb4f"/><path class="slxdt3n9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-safe-vault-saving-combo-payment-safe-money-combination-finance"} {...others} />);
}

export default Component;
