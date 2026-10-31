import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh7b0fb0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xh7b0fb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-o-fill-round"} {...others} />);
}

export default Component;
