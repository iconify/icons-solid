import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_k2hhb_e.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="m_k2hhb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:bars-3-bottom-right"} {...others} />);
}

export default Component;
