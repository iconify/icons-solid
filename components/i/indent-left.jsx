import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn93d6aes.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="xn93d6aes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:indent-left"} {...others} />);
}

export default Component;
