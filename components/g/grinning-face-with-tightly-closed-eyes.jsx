import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/r/rghv5g6qb.css';
import '../../css/x/xwiqc7bhx.css';
import '../../css/e/ecw7etird.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="rghv5g6qb"/><path class="xwiqc7bhx"/><path class="ecw7etird"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:grinning-face-with-tightly-closed-eyes"} {...others} />);
}

export default Component;
