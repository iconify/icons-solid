import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq6l0acvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lq6l0acvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ratio-3-2-fill-round"} {...others} />);
}

export default Component;
