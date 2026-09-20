import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxgp7eb0d.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="zxgp7eb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:location"} {...others} />);
}

export default Component;
