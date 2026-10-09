import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owtzhwipg.css';
import '../../css/s/sj9o9bcjz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="owtzhwipg"/><path class="sj9o9bcjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fish-20-bold"} {...others} />);
}

export default Component;
