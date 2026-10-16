import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omf76gbof.css';
import '../../css/f/f40uyxeum.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="omf76gbof"/><path class="f40uyxeum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heating-boost-20-bold"} {...others} />);
}

export default Component;
