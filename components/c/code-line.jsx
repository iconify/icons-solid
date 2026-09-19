import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c80hh1xpf.css';
import '../../css/z/ze3pztb9b.css';
import '../../css/q/qnhtqjloi.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="c80hh1xpf clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 ze3pztb9b"/><path class="clr-i-outline clr-i-outline-path-3 qnhtqjloi"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:code-line"} {...others} />);
}

export default Component;
