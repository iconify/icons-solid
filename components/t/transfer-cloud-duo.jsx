import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1hw_fahx.css';
import '../../css/y/yzx_6mbal.css';
import '../../css/y/yq95d_b5w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="c1hw_fahx"/><path class="yzx_6mbal"/><path class="yq95d_b5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:transfer-cloud-duo"} {...others} />);
}

export default Component;
