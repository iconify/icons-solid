import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkgqlmcvg.css';
import '../../css/j/j7_i9vbmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wkgqlmcvg"/><path class="j7_i9vbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:atr"} {...others} />);
}

export default Component;
