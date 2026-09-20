import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbb94gbjk.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="xbb94gbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:quote"} {...others} />);
}

export default Component;
