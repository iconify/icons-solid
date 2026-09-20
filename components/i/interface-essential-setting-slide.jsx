import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk4zobbyh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rk4zobbyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-setting-slide"} {...others} />);
}

export default Component;
