import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7x8mh8gn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o7x8mh8gn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:move-solid"} {...others} />);
}

export default Component;
