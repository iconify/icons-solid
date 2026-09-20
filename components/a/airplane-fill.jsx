import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9gzh_y0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9gzh_y0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:airplane-fill"} {...others} />);
}

export default Component;
