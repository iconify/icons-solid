import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg8_2jbxp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wg8_2jbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:two-giraffes"} {...others} />);
}

export default Component;
