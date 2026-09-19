import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekp8m2b8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ekp8m2b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-basketball"} {...others} />);
}

export default Component;
