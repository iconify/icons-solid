import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km2fl-ght.css';
import '../../css/n/nhk0vvrvh.css';
import '../../css/s/s39uf-bmg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="km2fl-ght"/><path class="nhk0vvrvh"/><path class="s39uf-bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-line-dots-20"} {...others} />);
}

export default Component;
