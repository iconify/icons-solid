import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6d320b8o.css';
import '../../css/k/k-e6hyidt.css';
import '../../css/q/qui88_o6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6d320b8o"/><path class="k-e6hyidt"/><path clip-rule="evenodd" class="qui88_o6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-lock-bold"} {...others} />);
}

export default Component;
