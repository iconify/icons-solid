import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_wx6iigs.css';
import '../../css/h/hh85jcb1u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n_wx6iigs"/><path class="hh85jcb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:city-skyline-20"} {...others} />);
}

export default Component;
