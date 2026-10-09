import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv99k2h7c.css';
import '../../css/v/vz-j8jb4e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cv99k2h7c"/><path class="vz-j8jb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-moon-20-bold"} {...others} />);
}

export default Component;
