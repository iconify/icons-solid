import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ec-8anrbt.css';
import '../../css/y/ytwighu4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ec-8anrbt"/><path class="ytwighu4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:attachment-square"} {...others} />);
}

export default Component;
