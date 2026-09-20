import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc7r4x4eu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lc7r4x4eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:book-line"} {...others} />);
}

export default Component;
