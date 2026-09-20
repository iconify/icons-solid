import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jayntqsmv.css';
import '../../css/d/dwh97eahs.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="jayntqsmv"/><path class="dwh97eahs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:printer"} {...others} />);
}

export default Component;
