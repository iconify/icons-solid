import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/b/b4jtc2s1i.css';
import '../../css/u/u5hrd1bpr.css';
import '../../css/u/uqq7glb-f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="b4jtc2s1i"/><path class="u5hrd1bpr"/><path class="uqq7glb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:winking-face"} {...others} />);
}

export default Component;
