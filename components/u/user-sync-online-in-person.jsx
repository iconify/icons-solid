import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzblkvbbx.css';
import '../../css/z/zv3abmbvr.css';
import '../../css/w/wnfnvklnf.css';
import '../../css/e/ez95c6pki.css';
import '../../css/i/iast07gvb.css';
import '../../css/r/r93n07bfc.css';
import '../../css/c/ci22-1wic.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kzblkvbbx"/><path class="zv3abmbvr"/><path class="wnfnvklnf"/><path class="ez95c6pki"/><path class="iast07gvb"/><path class="r93n07bfc"/><path class="ci22-1wic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-sync-online-in-person"} {...others} />);
}

export default Component;
