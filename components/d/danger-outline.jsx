import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqdm2xbfi.css';
import '../../css/p/prq9nybvi.css';
import '../../css/d/d71ngcbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqdm2xbfi"/><path class="prq9nybvi"/><path clip-rule="evenodd" class="d71ngcbgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:danger-outline"} {...others} />);
}

export default Component;
