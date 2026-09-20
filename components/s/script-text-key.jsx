import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_v3vdbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_v3vdbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:script-text-key"} {...others} />);
}

export default Component;
