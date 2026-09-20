import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwed5qbpo.css';
import '../../css/z/zzd4z557y.css';
import '../../css/x/xggwsvbub.css';
import '../../css/r/rjutyusvd.css';
import '../../css/f/fwe8xmbov.css';
import '../../css/g/grmf76bdo.css';
import '../../css/c/cfr9j13tz.css';
import '../../css/i/i-wsjltco.css';
import '../../css/s/sewilubzf.css';
import '../../css/f/fqln9xblg.css';
import '../../css/w/w90m-qbuy.css';
import '../../css/n/nrqb9ykdq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wwed5qbpo"/><path class="zzd4z557y"/><path class="xggwsvbub"/><path class="rjutyusvd"/><path class="fwe8xmbov"/><path class="grmf76bdo"/><path class="cfr9j13tz"/><path class="i-wsjltco"/><path class="sewilubzf"/><path class="fqln9xblg"/><path class="w90m-qbuy"/><path class="nrqb9ykdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:elixir-wordmark"} {...others} />);
}

export default Component;
