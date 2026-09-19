import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epd-0w0kv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="epd-0w0kv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:top-radio"} {...others} />);
}

export default Component;
