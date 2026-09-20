import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg9bjq-ll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wg9bjq-ll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-x-sharp-fill"} {...others} />);
}

export default Component;
