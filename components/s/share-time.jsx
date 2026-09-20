import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/faf5xj6kl.css';
import '../../css/q/q9ihrubsj.css';
import '../../css/p/p17gl2bbl.css';
import '../../css/y/yewvgbhmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="faf5xj6kl"/><path class="q9ihrubsj"/><path class="p17gl2bbl"/><path class="yewvgbhmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:share-time"} {...others} />);
}

export default Component;
