import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jeg0h9bgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jeg0h9bgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-euro-duotone-round"} {...others} />);
}

export default Component;
