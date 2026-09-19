import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql7d5ob1a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ql7d5ob1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:spawn-node"} {...others} />);
}

export default Component;
