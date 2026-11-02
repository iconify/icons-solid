import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw_t0ebdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lw_t0ebdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arc-browser-line"} {...others} />);
}

export default Component;
