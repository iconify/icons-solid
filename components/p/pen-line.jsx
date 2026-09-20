import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8g-9jb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8g-9jb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pen-line"} {...others} />);
}

export default Component;
