import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yimgu8b5h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yimgu8b5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:screw-beside-nail"} {...others} />);
}

export default Component;
