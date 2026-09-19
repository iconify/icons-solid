import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yac2tbc6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yac2tbc6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-up-wide-narrow"} {...others} />);
}

export default Component;
