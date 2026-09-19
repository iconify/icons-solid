import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsljz7bgq.css';
import '../../css/b/bgbj2wc5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rsljz7bgq"/><path class="bgbj2wc5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:playlist"} {...others} />);
}

export default Component;
