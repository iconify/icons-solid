import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcxe_wboo.css';

const viewBox = {"width":10,"height":16};
const content = `<path class="lcxe_wboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:arrow-down"} {...others} />);
}

export default Component;
