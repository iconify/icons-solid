import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w-l0ynbmg.css';
import '../../css/x/xaguw3biq.css';
import '../../css/w/w0plfmzgn.css';
import '../../css/n/n4vmky5vt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w-l0ynbmg wm-shadow"/><path class="wm-shadow xaguw3biq"/><path class="w0plfmzgn"/><path class="n4vmky5vt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:landmark"} {...others} />);
}

export default Component;
