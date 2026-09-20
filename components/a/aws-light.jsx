import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/i/it0-7sb5c.css';
import '../../css/e/etaocreys.css';
import '../../css/g/g287oqbdv.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="it0-7sb5c"/><path clip-rule="evenodd" class="etaocreys"/><path clip-rule="evenodd" class="g287oqbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:aws-light"} {...others} />);
}

export default Component;
