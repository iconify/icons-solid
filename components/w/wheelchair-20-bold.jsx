import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3kg39hqy.css';
import '../../css/e/exsoqbbod.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w3kg39hqy"/><path class="exsoqbbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wheelchair-20-bold"} {...others} />);
}

export default Component;
