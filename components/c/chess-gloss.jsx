import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd1vp8bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xd1vp8bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chess-gloss"} {...others} />);
}

export default Component;
