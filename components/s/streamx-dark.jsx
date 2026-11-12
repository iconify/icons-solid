import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjsebccxt.css';
import '../../css/z/z5clwdt3a.css';
import '../../css/t/t-sci2y1e.css';
import '../../css/k/ka2boc4gs.css';
import '../../css/l/l2nmuwoec.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vjsebccxt"/><path class="z5clwdt3a"/><path class="t-sci2y1e"/><path class="ka2boc4gs"/><path class="l2nmuwoec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamx-dark"} {...others} />);
}

export default Component;
