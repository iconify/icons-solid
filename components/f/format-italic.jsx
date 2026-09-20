import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/defsf5bjz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="defsf5bjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:format-italic"} {...others} />);
}

export default Component;
