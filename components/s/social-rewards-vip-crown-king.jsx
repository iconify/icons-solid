import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ricfbrb2c.css';
import '../../css/g/g4qqy3bgi.css';
import '../../css/y/yiwpdobhp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ricfbrb2c"/><path class="g4qqy3bgi"/><path class="yiwpdobhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:social-rewards-vip-crown-king"} {...others} />);
}

export default Component;
