import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5_gb5e-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m5_gb5e-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cloud-plus-fill-round"} {...others} />);
}

export default Component;
