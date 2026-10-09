import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz0-7c0kb.css';
import '../../css/j/jf0anfbvm.css';
import '../../css/r/r9l9x_bxp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oz0-7c0kb"/><path class="jf0anfbvm"/><path class="r9l9x_bxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:castle-48-bold"} {...others} />);
}

export default Component;
