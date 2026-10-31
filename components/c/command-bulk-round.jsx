import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg1h1q77m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qg1h1q77m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:command-bulk-round"} {...others} />);
}

export default Component;
