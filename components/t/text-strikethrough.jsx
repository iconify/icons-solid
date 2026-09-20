import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt_bfsh-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kt_bfsh-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-strikethrough"} {...others} />);
}

export default Component;
