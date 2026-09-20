import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh7l6ubcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dh7l6ubcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:playlist-line"} {...others} />);
}

export default Component;
