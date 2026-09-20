import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s80e3ct_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s80e3ct_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:album-2-line"} {...others} />);
}

export default Component;
