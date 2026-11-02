import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6wt9tb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6wt9tb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:usd-coin-usdc-line"} {...others} />);
}

export default Component;
