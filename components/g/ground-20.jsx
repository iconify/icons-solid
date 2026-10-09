import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rio2np7vm.css';
import '../../css/e/e2weyn4xz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rio2np7vm"/><path class="e2weyn4xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-20"} {...others} />);
}

export default Component;
