import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbz0v2bgj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fbz0v2bgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:qrcode"} {...others} />);
}

export default Component;
