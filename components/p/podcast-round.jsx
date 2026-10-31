import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpj8x5bzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpj8x5bzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:podcast-round"} {...others} />);
}

export default Component;
