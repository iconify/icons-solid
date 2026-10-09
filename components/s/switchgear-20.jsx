import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtjxqnmmf.css';
import '../../css/f/f2ws4q-cv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gtjxqnmmf"/><path class="f2ws4q-cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switchgear-20"} {...others} />);
}

export default Component;
