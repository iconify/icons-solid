import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdsjh737e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tdsjh737e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wide-e-in-parking-structure"} {...others} />);
}

export default Component;
