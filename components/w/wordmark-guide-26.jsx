import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2nqp7efb.css';

const viewBox = {"width":57,"height":26};
const content = `<path class="s2nqp7efb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:wordmark-guide-26"} {...others} />);
}

export default Component;
