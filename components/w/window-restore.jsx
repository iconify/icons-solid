import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9khp6ncv.css';
import '../../css/m/m6xypubal.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y9khp6ncv"/><path class="m6xypubal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:window-restore"} {...others} />);
}

export default Component;
