import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq6oioi6o.css';
import '../../css/l/lcqwnhbms.css';
import '../../css/y/yz_r44box.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vq6oioi6o"/><path class="lcqwnhbms"/><path class="yz_r44box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-protect-guard"} {...others} />);
}

export default Component;
