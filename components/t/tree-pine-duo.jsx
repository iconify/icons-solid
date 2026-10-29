import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uspo93buh.css';
import '../../css/q/qxnk23bzr.css';
import '../../css/b/b33sfbyeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uspo93buh"/><path class="qxnk23bzr wm-a"/><path class="b33sfbyeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tree-pine-duo"} {...others} />);
}

export default Component;
