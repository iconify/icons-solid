import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2ynbdc9b.css';
import '../../css/i/iqdm2xbfi.css';
import '../../css/x/x41xvfi0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z2ynbdc9b"/><path class="iqdm2xbfi"/><path class="x41xvfi0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:danger-square-bold-duotone"} {...others} />);
}

export default Component;
