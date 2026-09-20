import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvjhkcbmq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nvjhkcbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bucket-with-droplet"} {...others} />);
}

export default Component;
