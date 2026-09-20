import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kikbw02ov.css';
import '../../css/w/wim9qsbky.css';
import '../../css/h/h-y9pbcfn.css';
import '../../css/f/fop9j1b1c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kikbw02ov"/><path class="wim9qsbky"/><path class="h-y9pbcfn"/><path class="fop9j1b1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:brain"} {...others} />);
}

export default Component;
