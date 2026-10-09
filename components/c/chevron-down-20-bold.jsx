import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/docpr_fdo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="docpr_fdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevron-down-20-bold"} {...others} />);
}

export default Component;
