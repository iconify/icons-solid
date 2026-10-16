import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfr3hmr1v.css';
import '../../css/z/z4_1fsbrr.css';
import '../../css/c/cv4mn7b0k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rfr3hmr1v"/><path class="z4_1fsbrr"/><path class="cv4mn7b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-trailer-48-bold"} {...others} />);
}

export default Component;
