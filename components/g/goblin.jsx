import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy8yarv1p.css';
import '../../css/z/zam6icipb.css';
import '../../css/u/udd3bbc2x.css';
import '../../css/r/rcbetacvk.css';
import '../../css/d/d8n2ahbzx.css';
import '../../css/c/c7wygtmec.css';
import '../../css/j/jiy27xscn.css';
import '../../css/j/juec-ac7h.css';
import '../../css/v/v77keu7mm.css';
import '../../css/s/shqbcobiy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uy8yarv1p"/><path class="zam6icipb"/><g class="udd3bbc2x"><path class="rcbetacvk"/><path class="d8n2ahbzx"/></g><path class="c7wygtmec"/><path class="jiy27xscn"/><path class="juec-ac7h"/><path class="v77keu7mm"/><path class="shqbcobiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:goblin"} {...others} />);
}

export default Component;
