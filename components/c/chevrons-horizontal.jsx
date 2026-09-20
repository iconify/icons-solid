import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlzwmtb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qlzwmtb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:chevrons-horizontal"} {...others} />);
}

export default Component;
