import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_54f839h.css';
import '../../css/n/nrm4cfbvo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j_54f839h"/><path class="nrm4cfbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paragraph-20"} {...others} />);
}

export default Component;
