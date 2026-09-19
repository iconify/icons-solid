import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/j/j9q-ggb4w.css';
import '../../css/o/oj2uj9r0d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="j9q-ggb4w"/><path class="oj2uj9r0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:lerna"} {...others} />);
}

export default Component;
