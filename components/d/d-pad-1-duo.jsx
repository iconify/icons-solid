import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lgpt4o-jv.css';
import '../../css/c/cdt7i-bzt.css';
import '../../css/y/y56d8dbbt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="lgpt4o-jv"/><path class="cdt7i-bzt"/><path class="y56d8dbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:d-pad-1-duo"} {...others} />);
}

export default Component;
