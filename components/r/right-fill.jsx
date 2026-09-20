import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp9srac5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vp9srac5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:right-fill"} {...others} />);
}

export default Component;
