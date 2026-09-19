import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgp21hwsg.css';
import '../../css/a/awxvj7b1n.css';
import '../../css/s/sodpulb5k.css';
import '../../css/u/u3kivv9wu.css';
import '../../css/u/ufvcruebt.css';
import '../../css/m/mf-vjob5j.css';
import '../../css/u/u0-7-ac6y.css';
import '../../css/s/ssz67fb-c.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="xgp21hwsg"/><path class="awxvj7b1n"/><path class="sodpulb5k"/><path class="u3kivv9wu"/><path class="ufvcruebt"/><path class="mf-vjob5j"/><path class="u0-7-ac6y"/><path class="ssz67fb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:printer"} {...others} />);
}

export default Component;
