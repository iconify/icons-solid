import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3e-jeq9d.css';
import '../../css/d/d1iq10ban.css';
import '../../css/e/epkhpfbge.css';
import '../../css/a/azga5bb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3e-jeq9d"/><path class="d1iq10ban"/><path class="epkhpfbge"/><path clip-rule="evenodd" class="azga5bb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:uniswap"} {...others} />);
}

export default Component;
