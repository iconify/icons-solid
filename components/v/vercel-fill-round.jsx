import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwaq4lb1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hwaq4lb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:vercel-fill-round"} {...others} />);
}

export default Component;
