import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qei0r4z2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qei0r4z2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:binance-usd-busd-fill"} {...others} />);
}

export default Component;
