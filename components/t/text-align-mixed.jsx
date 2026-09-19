import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/judw4ebii.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="judw4ebii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-align-mixed"} {...others} />);
}

export default Component;
