import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf5cy-bbx.css';

const viewBox = {"width":896,"height":1024};
const content = `<path class="mf5cy-bbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:capslock"} {...others} />);
}

export default Component;
