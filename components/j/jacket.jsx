import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pkwnxxbuy.css';
import '../../css/a/avkwxrbxi.css';
import '../../css/m/ml553kega.css';
import '../../css/g/gd0d5n2es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pkwnxxbuy"/><path class="avkwxrbxi"/><path class="ml553kega"/><path class="gd0d5n2es"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:jacket"} {...others} />);
}

export default Component;
