import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af4lzgb0x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="af4lzgb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:triangle-filled-32"} {...others} />);
}

export default Component;
