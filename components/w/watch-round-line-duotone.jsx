import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tzigf2b1k.css';
import '../../css/s/s83reqb1j.css';
import '../../css/w/w37drss5a.css';
import '../../css/k/kbyx51bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tzigf2b1k"/><path class="s83reqb1j"/><path class="w37drss5a"/><path class="kbyx51bdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-line-duotone"} {...others} />);
}

export default Component;
