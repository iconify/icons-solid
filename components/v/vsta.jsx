import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi4gflb_o.css';
import '../../css/s/srtt_j7am.css';
import '../../css/z/zv6lc8bha.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fi4gflb_o"/><path class="srtt_j7am"/><path class="zv6lc8bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vsta"} {...others} />);
}

export default Component;
