import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljkbb2b7o.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ljkbb2b7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:tiktok-solid"} {...others} />);
}

export default Component;
