import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lka41ng8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lka41ng8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shapes-fill-round"} {...others} />);
}

export default Component;
