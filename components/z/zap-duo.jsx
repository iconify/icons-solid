import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxpg3nbkx.css';
import '../../css/d/d0vi13cyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxpg3nbkx secondary"/><path class="d0vi13cyo primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zap-duo"} {...others} />);
}

export default Component;
