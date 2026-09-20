import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nb0x9sbrj.css';
import '../../css/t/t8kklq1jq.css';
import '../../css/r/r-dv45bed.css';
import '../../css/c/chtvrs93h.css';
import '../../css/o/otvpmrblq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nb0x9sbrj"/><path class="t8kklq1jq"/><path class="r-dv45bed"/><path class="chtvrs93h"/><path class="otvpmrblq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:song-recommendation"} {...others} />);
}

export default Component;
