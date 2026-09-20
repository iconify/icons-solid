import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbytlgm_k.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fbytlgm_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:heart-rate-search-solid"} {...others} />);
}

export default Component;
