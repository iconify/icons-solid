import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuldcn9ig.css';
import '../../css/m/m3cwncbjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wuldcn9ig"/><path class="m3cwncbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:presentation-projector-screen-budget-analytics-bold"} {...others} />);
}

export default Component;
