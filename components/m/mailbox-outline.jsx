import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qerertb4y.css';
import '../../css/d/d6kmw2bit.css';
import '../../css/m/m2fux_dtm.css';
import '../../css/e/emkks-poi.css';
import '../../css/h/h3o1kbbyq.css';
import '../../css/o/of0htcwrh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qerertb4y"/><path class="d6kmw2bit"/><path clip-rule="evenodd" class="m2fux_dtm"/><path clip-rule="evenodd" class="emkks-poi"/><path class="h3o1kbbyq"/><path clip-rule="evenodd" class="of0htcwrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mailbox-outline"} {...others} />);
}

export default Component;
