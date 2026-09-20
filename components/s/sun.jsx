import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/qhq7cebcv.css';
import '../../css/v/vhgc4ioby.css';
import '../../css/i/ic_b11b4n.css';
import '../../css/h/hgcgqkb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="qhq7cebcv"/><path class="vhgc4ioby"/><path class="ic_b11b4n"/><path class="hgcgqkb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:sun"} {...others} />);
}

export default Component;
