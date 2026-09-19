import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3pyio9mi.css';
import '../../css/s/s9qx38vbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m3pyio9mi"/><path class="s9qx38vbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:registered"} {...others} />);
}

export default Component;
