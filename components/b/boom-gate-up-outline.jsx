import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck1syfznr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ck1syfznr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:boom-gate-up-outline"} {...others} />);
}

export default Component;
