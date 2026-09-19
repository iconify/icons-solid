import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/veed-4b0i.css';
import '../../css/m/md286fbip.css';
import '../../css/f/ftenlc6zr.css';
import '../../css/i/i9csw2bee.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="veed-4b0i"/><g class="md286fbip"><path class="ftenlc6zr"/><path class="i9csw2bee"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:drgn"} {...others} />);
}

export default Component;
