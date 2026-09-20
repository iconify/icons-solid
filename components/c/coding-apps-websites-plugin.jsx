import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0a_qlbll.css';
import '../../css/y/y_9gtc1-u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l0a_qlbll"/><path class="y_9gtc1-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-plugin"} {...others} />);
}

export default Component;
