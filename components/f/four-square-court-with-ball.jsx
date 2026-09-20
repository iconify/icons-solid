import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma4ppccnx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ma4ppccnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:four-square-court-with-ball"} {...others} />);
}

export default Component;
