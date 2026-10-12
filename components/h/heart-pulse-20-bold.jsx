import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_oeqshiy.css';
import '../../css/v/v7-hzldcr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a_oeqshiy"/><path class="v7-hzldcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heart-pulse-20-bold"} {...others} />);
}

export default Component;
