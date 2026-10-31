import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c16u-3bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c16u-3bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-uturn-down-right"} {...others} />);
}

export default Component;
