import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9dj_s43h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g9dj_s43h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:state-definition"} {...others} />);
}

export default Component;
