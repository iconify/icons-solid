import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvskalk6x.css';
import '../../css/y/ychu0ub8d.css';
import '../../css/j/jy7ylib9w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nvskalk6x"/><path class="ychu0ub8d"/><path class="jy7ylib9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rowing-20"} {...others} />);
}

export default Component;
