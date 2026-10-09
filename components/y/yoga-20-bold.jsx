import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0h130b3n.css';
import '../../css/f/fml2kccmr.css';
import '../../css/s/se5adobpm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b0h130b3n"/><path class="fml2kccmr"/><path class="se5adobpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yoga-20-bold"} {...others} />);
}

export default Component;
