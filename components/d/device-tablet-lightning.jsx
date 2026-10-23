import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgha40b5l.css';
import '../../css/o/oo-27jq7t.css';
import '../../css/f/fb6kjxo-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tgha40b5l"/><rect transform="rotate(-90 3.77 22.3)" class="oo-27jq7t"/><path class="fb6kjxo-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet-lightning"} {...others} />);
}

export default Component;
