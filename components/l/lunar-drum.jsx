import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n2zp3sbfn.css';
import '../../css/p/pdftahbub.css';
import '../../css/t/trqd8gbvg.css';
import '../../css/v/vxtsvobog.css';
import '../../css/b/bom9xkbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n2zp3sbfn wm-shadow"/><path class="pdftahbub wm-shadow"/><path class="trqd8gbvg"/><path class="vxtsvobog"/><path class="bom9xkbmd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lunar-drum"} {...others} />);
}

export default Component;
