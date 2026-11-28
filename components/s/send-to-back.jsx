import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vaq1hab2x.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="vaq1hab2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:send-to-back"} {...others} />);
}

export default Component;
