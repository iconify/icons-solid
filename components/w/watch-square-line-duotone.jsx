import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/ftmp3lbfo.css';
import '../../css/k/kf130ihje.css';
import '../../css/d/d-_0bsbbx.css';
import '../../css/s/sc93_2j6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ftmp3lbfo"/><path class="kf130ihje"/><path class="d-_0bsbbx"/><path class="sc93_2j6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-line-duotone"} {...others} />);
}

export default Component;
