import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tns3obmll.css';
import '../../css/r/rimbr1eku.css';
import '../../css/b/bnn-vab-g.css';
import '../../css/m/mdoyqib5n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tns3obmll"/><path clip-rule="evenodd" class="rimbr1eku"/><path class="bnn-vab-g"/><path class="mdoyqib5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:industry"} {...others} />);
}

export default Component;
