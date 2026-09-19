import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up844cc5r.css';
import '../../css/p/p6cb9-b_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="up844cc5r"/><path class="p6cb9-b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-book-heart"} {...others} />);
}

export default Component;
