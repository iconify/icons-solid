import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwh__obbd.css';
import '../../css/o/o6pe5-b3x.css';
import '../../css/c/cfbv642gs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fwh__obbd"/><path class="o6pe5-b3x"/><path class="cfbv642gs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:bag-suitcase-4"} {...others} />);
}

export default Component;
