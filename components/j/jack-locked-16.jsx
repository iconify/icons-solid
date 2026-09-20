import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxb4qkbhf.css';
import '../../css/i/ivphhvj4r.css';
import '../../css/p/p4rsgjvps.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oxb4qkbhf"/><path clip-rule="evenodd" class="ivphhvj4r"/><path class="p4rsgjvps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:jack-locked-16"} {...others} />);
}

export default Component;
