import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he4rpzjtd.css';
import '../../css/c/cv0y15bbh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="he4rpzjtd"/><path class="cv0y15bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stamp-20-bold"} {...others} />);
}

export default Component;
