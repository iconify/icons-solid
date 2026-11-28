import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlk9ttbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rlk9ttbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:workflow-gear"} {...others} />);
}

export default Component;
