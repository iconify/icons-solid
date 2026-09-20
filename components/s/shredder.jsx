import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axib82bqt.css';
import '../../css/j/j7xxlgkvy.css';
import '../../css/e/e8571ebzs.css';
import '../../css/s/sp43tve6w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="axib82bqt"/><path class="j7xxlgkvy"/><path class="e8571ebzs"/><path class="sp43tve6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shredder"} {...others} />);
}

export default Component;
