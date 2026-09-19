import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmj8f5ifm.css';

const viewBox = {"width":704,"height":1024};
const content = `<path class="nmj8f5ifm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:paperclipvertical"} {...others} />);
}

export default Component;
