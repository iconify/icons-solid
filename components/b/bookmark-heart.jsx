import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfk4z3biw.css';
import '../../css/q/qi2aslb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfk4z3biw"/><path class="qi2aslb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bookmark-heart"} {...others} />);
}

export default Component;
