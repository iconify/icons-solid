import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc0r-sbyi.css';
import '../../css/q/q5jdzcb9m.css';
import '../../css/c/cf-nt9u3d.css';
import '../../css/z/zb1dbob6a.css';
import '../../css/o/o9sudkbfx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lc0r-sbyi"/><path class="q5jdzcb9m"/><path class="cf-nt9u3d"/><path class="zb1dbob6a"/><path class="o9sudkbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whale"} {...others} />);
}

export default Component;
