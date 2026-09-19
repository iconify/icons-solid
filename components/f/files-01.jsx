import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ybj9neizb.css';
import '../../css/a/aym3u_brg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ybj9neizb"/><path class="aym3u_brg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:files-01"} {...others} />);
}

export default Component;
