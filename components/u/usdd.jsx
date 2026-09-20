import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iistc1ber.css';
import '../../css/p/pl-clrbxd.css';
import '../../css/i/i4y0aubop.css';
import '../../css/w/wb1puackx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iistc1ber"/><path class="pl-clrbxd"/><path class="i4y0aubop"/><path class="wb1puackx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:usdd"} {...others} />);
}

export default Component;
