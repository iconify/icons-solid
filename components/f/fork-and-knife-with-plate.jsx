import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmao8sg7p.css';
import '../../css/u/udi1b0fzv.css';
import '../../css/o/oyp3k4snw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mmao8sg7p"/><path class="udi1b0fzv"/><path class="oyp3k4snw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fork-and-knife-with-plate"} {...others} />);
}

export default Component;
