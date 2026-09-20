import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj7_yrpex.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="wj7_yrpex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:attach-solid"} {...others} />);
}

export default Component;
