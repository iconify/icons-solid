import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-cm0ty8h.css';
import '../../css/u/uwwux4bdl.css';
import '../../css/l/l_fae7rzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i-cm0ty8h"/><path class="uwwux4bdl"/><path class="l_fae7rzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-database-filled"} {...others} />);
}

export default Component;
