import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umayoyb1k.css';
import '../../css/o/ocq2nsbni.css';
import '../../css/z/zr0me355o.css';
import '../../css/b/besblbm2p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="umayoyb1k"/><path class="ocq2nsbni"/><path class="zr0me355o"/><path class="besblbm2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-polar-20-bold"} {...others} />);
}

export default Component;
