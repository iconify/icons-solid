import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iuljwwupt.css';
import '../../css/p/pxekbrbjq.css';
import '../../css/u/u5w4_1bel.css';
import '../../css/e/ez-oahbdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iuljwwupt"/><path class="pxekbrbjq"/><path class="u5w4_1bel"/><path class="ez-oahbdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:markup"} {...others} />);
}

export default Component;
