import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eqk_cmbqi.css';
import '../../css/m/mdh3hzb-o.css';
import '../../css/l/ll0qxj7eq.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><circle class="eqk_cmbqi"/><path class="mdh3hzb-o"/><circle class="ll0qxj7eq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:warning-circle"} {...others} />);
}

export default Component;
