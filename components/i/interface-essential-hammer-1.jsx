import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g154nh6_x.css';
import '../../css/b/b_5co9z5c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g154nh6_x"/><path class="b_5co9z5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-hammer-1"} {...others} />);
}

export default Component;
