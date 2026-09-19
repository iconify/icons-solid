import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xr0-4kb2q.css';
import '../../css/y/ypyppybok.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="cuyn6tgcc"><path class="xr0-4kb2q"/><path class="ypyppybok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:copilot-large"} {...others} />);
}

export default Component;
