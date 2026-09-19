import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig2lrfkgh.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ig2lrfkgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-exists-stroke-12"} {...others} />);
}

export default Component;
