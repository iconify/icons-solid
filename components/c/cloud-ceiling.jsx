import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm4isn3js.css';
import '../../css/y/y711oejcz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gm4isn3js"/><path class="y711oejcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-ceiling"} {...others} />);
}

export default Component;
