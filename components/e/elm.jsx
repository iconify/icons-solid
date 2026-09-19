import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpqhj5bej.css';
import '../../css/x/xe9aj_lzj.css';
import '../../css/p/p_ziwabsz.css';
import '../../css/a/axq3e3bkb.css';
import '../../css/n/nizlai9po.css';
import '../../css/b/bsbdzxd2i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gpqhj5bej"/><path class="xe9aj_lzj"/><path class="p_ziwabsz"/><path class="axq3e3bkb"/><path class="nizlai9po"/><path class="bsbdzxd2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:elm"} {...others} />);
}

export default Component;
