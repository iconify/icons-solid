import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mof-mqc8u.css';
import '../../css/z/z4rdixorf.css';
import '../../css/o/o3x5bbc6l.css';
import '../../css/t/tucir8lfq.css';
import '../../css/l/lik_usb6f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mof-mqc8u"/><path class="z4rdixorf"/><path class="o3x5bbc6l"/><path class="tucir8lfq"/><path class="lik_usb6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sunrise-1-bold"} {...others} />);
}

export default Component;
