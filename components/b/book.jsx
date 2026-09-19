import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbhxcpbvt.css';
import '../../css/h/hd8ss2bbz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vbhxcpbvt"/><path class="hd8ss2bbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:book"} {...others} />);
}

export default Component;
