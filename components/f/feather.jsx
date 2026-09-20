import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im2qk3bnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="im2qk3bnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:feather"} {...others} />);
}

export default Component;
