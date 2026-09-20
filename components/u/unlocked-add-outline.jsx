import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex4c8gwtr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ex4c8gwtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:unlocked-add-outline"} {...others} />);
}

export default Component;
