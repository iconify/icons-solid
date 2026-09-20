import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v51z47b0w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v51z47b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:codeproject-ai-server-dark"} {...others} />);
}

export default Component;
