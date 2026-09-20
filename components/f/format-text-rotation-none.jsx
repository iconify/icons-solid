import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa3_k1b_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pa3_k1b_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-text-rotation-none"} {...others} />);
}

export default Component;
