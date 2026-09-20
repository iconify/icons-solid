import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv6f-v97w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jv6f-v97w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:heart-code"} {...others} />);
}

export default Component;
