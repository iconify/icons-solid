import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxe0vybfv.css';
import '../../css/c/c6l5vwb1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wxe0vybfv"/><path class="c6l5vwb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:business-card-hand-2-bold"} {...others} />);
}

export default Component;
