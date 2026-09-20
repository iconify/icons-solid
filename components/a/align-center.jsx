import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1a6c0ghi.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="p1a6c0ghi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:align-center"} {...others} />);
}

export default Component;
