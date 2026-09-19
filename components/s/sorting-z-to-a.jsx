import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wavd5lb8u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wavd5lb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:sorting-z-to-a"} {...others} />);
}

export default Component;
