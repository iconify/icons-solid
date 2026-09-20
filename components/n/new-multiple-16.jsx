import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzr5rdboi.css';
import '../../css/v/vajfkwctv.css';
import '../../css/f/fp4n9byjm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dzr5rdboi"/><path clip-rule="evenodd" class="vajfkwctv"/><path class="fp4n9byjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:new-multiple-16"} {...others} />);
}

export default Component;
