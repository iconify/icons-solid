import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9j0j5byc.css';
import '../../css/s/suv5jb35a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x9j0j5byc"/><path class="suv5jb35a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sticky-note-x-filled"} {...others} />);
}

export default Component;
