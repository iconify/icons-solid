import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujilh4b6o.css';
import '../../css/q/q9et3dbor.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ujilh4b6o"/><path class="q9et3dbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bandage-20-bold"} {...others} />);
}

export default Component;
