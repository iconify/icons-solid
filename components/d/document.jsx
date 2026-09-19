import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0odedbyc.css';
import '../../css/f/ffal_wb_v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y0odedbyc"/><path class="ffal_wb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document"} {...others} />);
}

export default Component;
