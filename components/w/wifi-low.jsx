import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o0ihmsbgn.css';
import '../../css/s/sc6l7vb1a.css';
import '../../css/o/oki_akbvh.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="o0ihmsbgn"/><path class="sc6l7vb1a"/><path class="oki_akbvh"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wifi-low"} {...others} />);
}

export default Component;
