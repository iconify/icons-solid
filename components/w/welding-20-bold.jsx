import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzs4rus3p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nzs4rus3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:welding-20-bold"} {...others} />);
}

export default Component;
