import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuok9n6gl.css';
import '../../css/y/yyebewpzb.css';
import '../../css/q/qpno0-uga.css';
import '../../css/l/lsfembcox.css';
import '../../css/x/xz-75e69l.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wuok9n6gl"/><path class="yyebewpzb"/><path class="qpno0-uga"/><path class="lsfembcox"/><path class="xz-75e69l"/><path class="jeyqzjnhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-air-alert-20-bold"} {...others} />);
}

export default Component;
