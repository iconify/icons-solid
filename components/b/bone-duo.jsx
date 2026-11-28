import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkza45u4w.css';
import '../../css/i/iik494jlc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qkza45u4w secondary"/><path class="iik494jlc primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bone-duo"} {...others} />);
}

export default Component;
