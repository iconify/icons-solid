import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/csrkrnb5y.css';
import '../../css/l/lsxguc_1v.css';
import '../../css/b/bj30ulegm.css';
import '../../css/k/k756bi2wv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="csrkrnb5y"/><path class="lsxguc_1v"/></g><path class="bj30ulegm"/><path class="k756bi2wv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-bold-duotone"} {...others} />);
}

export default Component;
