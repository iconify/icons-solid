import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0kp65hhk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x0kp65hhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:flask-florence"} {...others} />);
}

export default Component;
