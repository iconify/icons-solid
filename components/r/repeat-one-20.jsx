import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7bfszaos.css';
import '../../css/t/tbg_x-bdw.css';
import '../../css/s/sux4gdc6p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k7bfszaos"/><path class="tbg_x-bdw"/><path class="sux4gdc6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repeat-one-20"} {...others} />);
}

export default Component;
