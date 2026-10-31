import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kua0webro.css';
import '../../css/o/o7vw13bdp.css';
import '../../css/s/sczesx71k.css';
import '../../css/t/t04gblboz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="kua0webro wm-shadow"/><path class="o7vw13bdp wm-shadow"/><path class="sczesx71k"/><path class="t04gblboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heart-balloon"} {...others} />);
}

export default Component;
