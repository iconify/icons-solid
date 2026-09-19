import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic3wg7_sk.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="ic3wg7_sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:cloudaltupload"} {...others} />);
}

export default Component;
