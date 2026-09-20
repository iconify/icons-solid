import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olirf2bph.css';
import '../../css/q/qz4yqq5kt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="olirf2bph"/><path class="qz4yqq5kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:coinex-smart-chain"} {...others} />);
}

export default Component;
