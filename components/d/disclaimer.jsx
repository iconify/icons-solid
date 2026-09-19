import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7h9xac7h.css';
import '../../css/w/w53fmab5d.css';
import '../../css/b/bscrkv5xv.css';
import '../../css/i/iw0zruopo.css';
import '../../css/r/rncb8y9jg.css';
import '../../css/u/uma3bn25d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a7h9xac7h"><path class="w53fmab5d"/><path class="bscrkv5xv"/></g><g class="iw0zruopo"><path class="rncb8y9jg"/><path class="uma3bn25d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:disclaimer"} {...others} />);
}

export default Component;
