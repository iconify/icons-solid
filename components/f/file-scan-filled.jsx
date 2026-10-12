import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x78bggbaj.css';
import '../../css/u/um2797y-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x78bggbaj"/><path class="um2797y-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-scan-filled"} {...others} />);
}

export default Component;
