import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5gdlqr6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5gdlqr6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-selection"} {...others} />);
}

export default Component;
