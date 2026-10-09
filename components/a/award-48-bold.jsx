import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dibcbtkzz.css';
import '../../css/p/pjb032xjh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dibcbtkzz"/><path class="pjb032xjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:award-48-bold"} {...others} />);
}

export default Component;
