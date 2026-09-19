import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yl_77jb6w.css';
import '../../css/x/xmykfublx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yl_77jb6w"/><path class="xmykfublx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-search-02"} {...others} />);
}

export default Component;
