import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukw-q400c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ukw-q400c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:flip-vertical-16"} {...others} />);
}

export default Component;
