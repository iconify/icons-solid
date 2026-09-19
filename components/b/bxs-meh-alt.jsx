import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_ikq9i9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_ikq9i9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-meh-alt"} {...others} />);
}

export default Component;
