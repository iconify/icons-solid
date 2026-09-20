import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y95p8j6km.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y95p8j6km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:alarm-plus"} {...others} />);
}

export default Component;
