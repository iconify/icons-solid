import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lx2-ubcjc.css';
import '../../css/g/g2qaiez3p.css';
import '../../css/x/xw_me4vft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lx2-ubcjc"/><path class="g2qaiez3p wm-a"/><path class="xw_me4vft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rectangle-ellipsis-duo"} {...others} />);
}

export default Component;
