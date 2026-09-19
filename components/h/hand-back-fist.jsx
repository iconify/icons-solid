import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3rsx1buz.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="c3rsx1buz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:hand-back-fist"} {...others} />);
}

export default Component;
