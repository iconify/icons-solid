import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4shs0_ov.css';
import '../../css/t/t8d9w-tva.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i4shs0_ov"/><path class="t8d9w-tva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-20"} {...others} />);
}

export default Component;
