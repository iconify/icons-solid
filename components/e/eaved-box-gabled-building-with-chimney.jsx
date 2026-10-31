import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdicv_b1k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xdicv_b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:eaved-box-gabled-building-with-chimney"} {...others} />);
}

export default Component;
