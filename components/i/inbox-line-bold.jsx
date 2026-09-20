import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qj2_vhona.css';
import '../../css/a/ani88abqb.css';
import '../../css/e/ekar3le3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qj2_vhona"/><path clip-rule="evenodd" class="ani88abqb"/><path clip-rule="evenodd" class="ekar3le3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-line-bold"} {...others} />);
}

export default Component;
