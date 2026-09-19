import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/donj61b_d.css';
import '../../css/b/bgbj2wc5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="donj61b_d"/><path class="bgbj2wc5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-playlist"} {...others} />);
}

export default Component;
