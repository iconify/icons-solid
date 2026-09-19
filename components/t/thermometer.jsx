import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ladf9qkxg.css';
import '../../css/x/x28r8k_ex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ladf9qkxg"/><path class="x28r8k_ex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:thermometer"} {...others} />);
}

export default Component;
