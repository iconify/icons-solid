import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/v/vnl0nvbii.css';
import '../../css/p/pbzv-hbep.css';
import '../../css/q/qoy1ubbyq.css';
import '../../css/s/sa1x97bia.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="am770-rkn"/><rect class="vnl0nvbii"/><path class="pbzv-hbep"/><path class="qoy1ubbyq"/><path class="sa1x97bia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:dizzy"} {...others} />);
}

export default Component;
