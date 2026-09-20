import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iprtbcb_s.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="iprtbcb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:tuba-16"} {...others} />);
}

export default Component;
