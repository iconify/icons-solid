import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzb_m2b_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kzb_m2b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tv-fill-round"} {...others} />);
}

export default Component;
