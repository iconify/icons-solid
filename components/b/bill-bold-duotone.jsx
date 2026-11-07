import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tax30dbya.css';
import '../../css/n/nrh4mfbus.css';
import '../../css/j/j7cw-sb7g.css';
import '../../css/g/gxlvpg50i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tax30dbya"/><path class="nrh4mfbus"/><path class="j7cw-sb7g"/><path class="gxlvpg50i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-bold-duotone"} {...others} />);
}

export default Component;
