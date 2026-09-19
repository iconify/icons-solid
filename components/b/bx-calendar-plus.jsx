import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oasq28blt.css';
import '../../css/d/dfc4wub2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oasq28blt"/><path class="dfc4wub2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-calendar-plus"} {...others} />);
}

export default Component;
