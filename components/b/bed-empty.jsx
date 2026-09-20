import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dem4o0bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dem4o0bsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bed-empty"} {...others} />);
}

export default Component;
