import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coz08f0-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="coz08f0-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:binance-coin-bnb-fill"} {...others} />);
}

export default Component;
