import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/p/pk4lo_bnu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="pk4lo_bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-angry-20"} {...others} />);
}

export default Component;
