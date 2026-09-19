import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yuj51nhau.css';
import '../../css/x/xczt9mbbm.css';
import '../../css/q/qzm-2f19d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="yuj51nhau"/><path class="xczt9mbbm"/><path class="qzm-2f19d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:clipboard-minus"} {...others} />);
}

export default Component;
