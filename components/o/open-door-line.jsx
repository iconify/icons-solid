import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guacuabyw.css';
import '../../css/w/wqgx4hy9o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="guacuabyw"/><path class="wqgx4hy9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:open-door-line"} {...others} />);
}

export default Component;
