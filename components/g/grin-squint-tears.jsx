import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh-g3hbar.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="yh-g3hbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:grin-squint-tears"} {...others} />);
}

export default Component;
