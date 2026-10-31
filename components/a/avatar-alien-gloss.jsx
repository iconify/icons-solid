import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmlz3jb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jmlz3jb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-alien-gloss"} {...others} />);
}

export default Component;
