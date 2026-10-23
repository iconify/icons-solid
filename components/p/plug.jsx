import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/q8w-nithu.css';
import '../../css/t/tbidatbnc.css';
import '../../css/m/m0xkyab8u.css';
import '../../css/v/vqrxffvkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="q8w-nithu"/><path class="tbidatbnc"/><path class="m0xkyab8u"/><path class="vqrxffvkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:plug"} {...others} />);
}

export default Component;
