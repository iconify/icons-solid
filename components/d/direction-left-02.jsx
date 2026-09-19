import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cd16omb3q.css';
import '../../css/d/d89ytfbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cd16omb3q"/><path class="d89ytfbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:direction-left-02"} {...others} />);
}

export default Component;
