import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e5etnbbyw.css';
import '../../css/b/bfp06b55b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e5etnbbyw"/><path class="bfp06b55b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tap-01"} {...others} />);
}

export default Component;
