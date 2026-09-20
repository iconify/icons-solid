import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amf6pcb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="amf6pcb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-drive-logo-2"} {...others} />);
}

export default Component;
