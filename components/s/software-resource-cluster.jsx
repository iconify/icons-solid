import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm6b_0xno.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pm6b_0xno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:software-resource-cluster"} {...others} />);
}

export default Component;
