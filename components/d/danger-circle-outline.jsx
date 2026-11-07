import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqdm2xbfi.css';
import '../../css/x/x41xvfi0c.css';
import '../../css/f/fhxzx1b_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqdm2xbfi"/><path class="x41xvfi0c"/><path clip-rule="evenodd" class="fhxzx1b_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:danger-circle-outline"} {...others} />);
}

export default Component;
