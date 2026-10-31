import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/k/k9mhepcsb.css';
import '../../css/a/aercjtb0m.css';
import '../../css/b/bw9zawbke.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="k9mhepcsb"/><path class="aercjtb0m"/><path class="bw9zawbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:kurdistan"} {...others} />);
}

export default Component;
