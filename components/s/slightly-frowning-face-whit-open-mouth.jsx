import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/b/bzcjbiteh.css';
import '../../css/d/d69g7vb5s.css';
import '../../css/u/uqq7glb-f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="bzcjbiteh"/><path class="d69g7vb5s"/><path class="uqq7glb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:slightly-frowning-face-whit-open-mouth"} {...others} />);
}

export default Component;
