import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9umykbju.css';
import '../../css/e/esmbl8oyw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s9umykbju"/><path class="esmbl8oyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-left-20-bold"} {...others} />);
}

export default Component;
