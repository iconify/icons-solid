import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d80gbh72b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d80gbh72b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:picnic-area"} {...others} />);
}

export default Component;
