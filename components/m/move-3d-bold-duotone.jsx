import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngc43h1qd.css';
import '../../css/r/r4s-9h9pk.css';
import '../../css/a/a0gabhbxn.css';
import '../../css/j/j31v2xbct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngc43h1qd"/><path class="r4s-9h9pk"/><path class="a0gabhbxn"/><path class="j31v2xbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-3d-bold-duotone"} {...others} />);
}

export default Component;
