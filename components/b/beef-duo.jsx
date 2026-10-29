import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fokpgob2f.css';
import '../../css/u/u5j49objb.css';
import '../../css/q/qzof9nhok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fokpgob2f"/><path class="u5j49objb wm-a"/><path class="qzof9nhok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:beef-duo"} {...others} />);
}

export default Component;
