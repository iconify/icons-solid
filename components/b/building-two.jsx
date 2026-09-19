import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hcent-gle.css';
import '../../css/k/kiitlmg0j.css';
import '../../css/h/had8q-s7j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hcent-gle"/><path clip-rule="evenodd" class="kiitlmg0j"/><path class="had8q-s7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:building-two"} {...others} />);
}

export default Component;
