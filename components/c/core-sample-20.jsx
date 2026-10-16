import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm7hjkbca.css';
import '../../css/b/bnwm9wbtd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fm7hjkbca"/><path class="bnwm9wbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:core-sample-20"} {...others} />);
}

export default Component;
