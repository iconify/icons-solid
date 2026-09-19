import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/koa_941ji.css';
import '../../css/b/b3m01lz4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="koa_941ji"/><path class="b3m01lz4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:heart-pulse"} {...others} />);
}

export default Component;
