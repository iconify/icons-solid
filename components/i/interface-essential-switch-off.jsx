import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbkbqr1mk.css';
import '../../css/h/h-szocp3t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bbkbqr1mk"/><path class="h-szocp3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-switch-off"} {...others} />);
}

export default Component;
