import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sihs_b4zx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sihs_b4zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:coins-round"} {...others} />);
}

export default Component;
