import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w45-95bra.css';
import '../../css/s/s6vetcb2r.css';
import '../../css/s/sd2ql6hrn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w45-95bra"/><path clip-rule="evenodd" class="s6vetcb2r"/><path class="sd2ql6hrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:umami"} {...others} />);
}

export default Component;
