import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4lm9rt0w.css';
import '../../css/p/p8yolrbml.css';
import '../../css/f/fquez4bpm.css';
import '../../css/m/musami3uq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e4lm9rt0w"/><path class="p8yolrbml"/><path class="fquez4bpm"/><path class="musami3uq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:compass-navigator"} {...others} />);
}

export default Component;
