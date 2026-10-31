import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idv2q1mcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idv2q1mcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:merge-duotone-round"} {...others} />);
}

export default Component;
