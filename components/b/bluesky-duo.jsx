import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkz86tbnb.css';
import '../../css/t/tlq2l5bdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qkz86tbnb secondary"/><path class="primary tlq2l5bdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bluesky-duo"} {...others} />);
}

export default Component;
