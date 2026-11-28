import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy_ggab6j.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="gy_ggab6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:telescope-light"} {...others} />);
}

export default Component;
