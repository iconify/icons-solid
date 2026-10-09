import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnw4jqz8j.css';
import '../../css/u/uwp-39bvg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gnw4jqz8j"/><path class="uwp-39bvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:milestone-20"} {...others} />);
}

export default Component;
