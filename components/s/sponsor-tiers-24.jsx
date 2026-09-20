import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcrc-8b3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fcrc-8b3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:sponsor-tiers-24"} {...others} />);
}

export default Component;
