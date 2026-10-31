import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq2ci_q3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mq2ci_q3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:horse-fill-round"} {...others} />);
}

export default Component;
