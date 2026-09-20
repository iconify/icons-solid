import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzfqp_bxg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wzfqp_bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:badge-promotion-outline"} {...others} />);
}

export default Component;
