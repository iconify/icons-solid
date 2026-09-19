import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_2-9c3fr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s_2-9c3fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:letter-aa"} {...others} />);
}

export default Component;
