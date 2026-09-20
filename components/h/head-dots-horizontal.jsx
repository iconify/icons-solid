import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk4y2vb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jk4y2vb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:head-dots-horizontal"} {...others} />);
}

export default Component;
