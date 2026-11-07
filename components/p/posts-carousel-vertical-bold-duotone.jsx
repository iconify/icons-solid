import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/o0l0yrncv.css';
import '../../css/y/yhu770tis.css';
import '../../css/t/tslomuedm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="o0l0yrncv"/><path class="yhu770tis"/></g><path class="tslomuedm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-vertical-bold-duotone"} {...others} />);
}

export default Component;
