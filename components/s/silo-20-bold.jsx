import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljgv6abmg.css';
import '../../css/x/xhptmubfq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ljgv6abmg"/><path class="xhptmubfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:silo-20-bold"} {...others} />);
}

export default Component;
