import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whr5k5f0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="whr5k5f0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-duocolor-round"} {...others} />);
}

export default Component;
