import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd3uuv79k.css';
import '../../css/d/dl-5kubnt.css';
import '../../css/d/du8lzsbmv.css';
import '../../css/k/kn41iccqi.css';
import '../../css/l/l-qdid21a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nd3uuv79k"/><path class="dl-5kubnt"/><path class="du8lzsbmv"/><path class="kn41iccqi"/><path clip-rule="evenodd" class="l-qdid21a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-2-outline"} {...others} />);
}

export default Component;
