import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hecxz1a6q.css';
import '../../css/e/ebeckoi3c.css';
import '../../css/i/if6_7mb5p.css';
import '../../css/u/ut1eaac0p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hecxz1a6q"/><path class="ebeckoi3c"/><path class="if6_7mb5p"/><path class="ut1eaac0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:button-rewind-1"} {...others} />);
}

export default Component;
