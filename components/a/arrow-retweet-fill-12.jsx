import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1idh6b0g.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="k1idh6b0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-retweet-fill-12"} {...others} />);
}

export default Component;
