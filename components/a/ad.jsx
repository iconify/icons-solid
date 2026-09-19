import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvekuabrc.css';
import '../../css/f/f7oovfquj.css';
import '../../css/c/cxmbiab3o.css';
import '../../css/o/oage_qcad.css';
import '../../css/x/xjnpp3b7f.css';
import '../../css/f/fu00bkj3r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="mvekuabrc"/><path class="f7oovfquj"/><path class="cxmbiab3o"/><path class="oage_qcad"/><path class="xjnpp3b7f"/><path class="fu00bkj3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ad"} {...others} />);
}

export default Component;
