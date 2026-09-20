import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr1_5-ayd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gr1_5-ayd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:align-right"} {...others} />);
}

export default Component;
