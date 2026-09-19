import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-fl9tbbe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t-fl9tbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:user-favorite-alt"} {...others} />);
}

export default Component;
