import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6tr8jbnr.css';
import '../../css/g/gomkjk-dj.css';
import '../../css/o/ogyt7d-0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b6tr8jbnr"/><path class="gomkjk-dj"/><path class="ogyt7d-0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lightbulb-off"} {...others} />);
}

export default Component;
