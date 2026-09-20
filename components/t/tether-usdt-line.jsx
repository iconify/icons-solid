import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi_htnp5m.css';
import '../../css/b/bvztumbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oi_htnp5m"/><ellipse class="bvztumbiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:tether-usdt-line"} {...others} />);
}

export default Component;
