import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb0dzmjui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bb0dzmjui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-customize"} {...others} />);
}

export default Component;
