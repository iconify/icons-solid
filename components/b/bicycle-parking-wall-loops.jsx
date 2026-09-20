import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vytd0jb7h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vytd0jb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bicycle-parking-wall-loops"} {...others} />);
}

export default Component;
