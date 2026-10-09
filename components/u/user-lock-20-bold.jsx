import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dny5eubpk.css';
import '../../css/l/l2cqzcbfa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dny5eubpk"/><path class="l2cqzcbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-lock-20-bold"} {...others} />);
}

export default Component;
