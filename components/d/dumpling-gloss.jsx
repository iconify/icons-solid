import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp8n_7c6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k zp8n_7c6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dumpling-gloss"} {...others} />);
}

export default Component;
