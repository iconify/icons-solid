import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2hf6ybaf.css';
import '../../css/d/dgf4jct3s.css';
import '../../css/y/yrrr0xb2e.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/i/idhqobc4a.css';
import '../../css/o/owbnxcbku.css';
import '../../css/y/yq0-k9b5y.css';
import '../../css/s/sf7bmc_ab.css';
import '../../css/z/z49-30vwz.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="q2hf6ybaf"/><path class="dgf4jct3s"/><path class="yrrr0xb2e"/><g class="x8poo_bjf"><circle class="idhqobc4a"/><circle class="owbnxcbku"/><path class="yq0-k9b5y"/><circle class="sf7bmc_ab"/><circle class="z49-30vwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wheel"} {...others} />);
}

export default Component;
