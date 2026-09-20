import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9o1kzb8g.css';
import '../../css/z/zeyokwb1m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h9o1kzb8g"/><path class="zeyokwb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-profile-female"} {...others} />);
}

export default Component;
