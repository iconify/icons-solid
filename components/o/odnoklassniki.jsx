import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chpo8u4lm.css';

const viewBox = {"width":272,"height":432};
const content = `<path class="chpo8u4lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:odnoklassniki"} {...others} />);
}

export default Component;
