import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1kwa90ro.css';
import '../../css/w/wsqoz19zh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e1kwa90ro"/><path class="wsqoz19zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:splitpro-light"} {...others} />);
}

export default Component;
