import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfx0_2f9y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qfx0_2f9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:dice-two"} {...others} />);
}

export default Component;
