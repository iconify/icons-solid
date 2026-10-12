import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/for14rbhn.css';
import '../../css/y/yyebewpzb.css';
import '../../css/q/qpno0-uga.css';
import '../../css/l/lsfembcox.css';
import '../../css/x/xz-75e69l.css';
import '../../css/a/asc4-fm2e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="for14rbhn"/><path class="yyebewpzb"/><path class="qpno0-uga"/><path class="lsfembcox"/><path class="xz-75e69l"/><path class="asc4-fm2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-air-check-20-bold"} {...others} />);
}

export default Component;
