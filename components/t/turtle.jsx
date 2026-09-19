import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8bygjb1r.css';
import '../../css/c/c8y7okrif.css';
import '../../css/d/d3fqriehb.css';
import '../../css/y/yga48zbfr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y8bygjb1r"/><path class="c8y7okrif"/><path class="d3fqriehb"/><path class="yga48zbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:turtle"} {...others} />);
}

export default Component;
