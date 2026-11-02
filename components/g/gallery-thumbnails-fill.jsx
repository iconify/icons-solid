import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q46im1cui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q46im1cui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:gallery-thumbnails-fill"} {...others} />);
}

export default Component;
