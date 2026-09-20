import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/nlzkrabat.css';
import '../../css/x/x82gbibje.css';
import '../../css/m/mdhhddb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="nlzkrabat"/><path class="x82gbibje"/><path class="mdhhddb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:water-drop"} {...others} />);
}

export default Component;
