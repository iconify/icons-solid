import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nfsajtnmw.css';
import '../../css/j/js7dzdb1b.css';
import '../../css/o/ockaeov5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nfsajtnmw"/><path class="js7dzdb1b"/><path class="ockaeov5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:clipboard-plus"} {...others} />);
}

export default Component;
