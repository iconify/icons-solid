import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npwtzq6gi.css';
import '../../css/u/uq5sy7bwp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="npwtzq6gi"/><path class="uq5sy7bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oven-20-bold"} {...others} />);
}

export default Component;
