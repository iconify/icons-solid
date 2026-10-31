import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2am-7b0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w2am-7b0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-more-vertical-fill-round"} {...others} />);
}

export default Component;
