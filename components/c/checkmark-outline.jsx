import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2pqswazu.css';
import '../../css/w/ww4fyqbuj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q2pqswazu"/><path class="ww4fyqbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:checkmark-outline"} {...others} />);
}

export default Component;
