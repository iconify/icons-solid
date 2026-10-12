import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwghfsbpm.css';
import '../../css/h/hh-jpbbja.css';
import '../../css/y/yd1cd0q4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bwghfsbpm"/><path class="hh-jpbbja"/><path class="yd1cd0q4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:microphone-sparkle"} {...others} />);
}

export default Component;
