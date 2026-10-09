import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9nmtab-x.css';
import '../../css/b/bkmbl7bof.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l9nmtab-x"/><path class="bkmbl7bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-scatter-20"} {...others} />);
}

export default Component;
