import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vuryjg-7f.css';
import '../../css/i/if6l61ygi.css';
import '../../css/l/leq5oj53s.css';
import '../../css/r/rc4a8e0yb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vuryjg-7f"/><path class="if6l61ygi"/><circle transform="rotate(-90 18.05 5.4)" class="leq5oj53s"/><path class="rc4a8e0yb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bell-settings"} {...others} />);
}

export default Component;
