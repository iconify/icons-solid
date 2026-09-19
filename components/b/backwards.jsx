import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgnj9kbrr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xgnj9kbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:backwards"} {...others} />);
}

export default Component;
