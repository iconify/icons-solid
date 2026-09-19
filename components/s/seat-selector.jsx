import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cf1ck1bwx.css';
import '../../css/r/rjaicdbgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cf1ck1bwx"/><path class="rjaicdbgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:seat-selector"} {...others} />);
}

export default Component;
