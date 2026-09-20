import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz01e0bkd.css';
import '../../css/m/mmrm4kbcu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zz01e0bkd"/><path class="mmrm4kbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-house-2"} {...others} />);
}

export default Component;
