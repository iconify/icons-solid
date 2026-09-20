import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw3ccs95k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xw3ccs95k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bowling-pin"} {...others} />);
}

export default Component;
