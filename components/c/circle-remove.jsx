import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtyy-2w-p.css';
import '../../css/q/qds-v0bfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtyy-2w-p"/><path class="qds-v0bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-remove"} {...others} />);
}

export default Component;
