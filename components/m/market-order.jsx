import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/w/wjtjrpzmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="zv6cqnbnp"/><path class="wjtjrpzmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:market-order"} {...others} />);
}

export default Component;
