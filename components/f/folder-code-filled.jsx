import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obb4mh94a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="obb4mh94a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-code-filled"} {...others} />);
}

export default Component;
