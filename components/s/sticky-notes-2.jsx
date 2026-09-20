import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vw7yqhc0j.css';
import '../../css/m/miqvqdosu.css';
import '../../css/v/vkl7yebus.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="vw7yqhc0j"/><path class="miqvqdosu"/><path class="vkl7yebus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:sticky-notes-2"} {...others} />);
}

export default Component;
