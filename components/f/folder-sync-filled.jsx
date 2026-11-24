import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5bpy3h5o.css';
import '../../css/m/mcxelrguj.css';
import '../../css/c/c3wcwvbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5bpy3h5o"/><path class="mcxelrguj"/><path class="c3wcwvbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-sync-filled"} {...others} />);
}

export default Component;
