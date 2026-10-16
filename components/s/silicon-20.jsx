import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytc7x632j.css';
import '../../css/d/dygm4jbzt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ytc7x632j"/><path class="dygm4jbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:silicon-20"} {...others} />);
}

export default Component;
