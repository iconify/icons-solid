import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1dkykb1h.css';
import '../../css/m/mtoynvb0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1dkykb1h"/><path class="mtoynvb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:whatsapp"} {...others} />);
}

export default Component;
