import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1-r7x1oe.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="f1-r7x1oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:toggle-switch-on"} {...others} />);
}

export default Component;
