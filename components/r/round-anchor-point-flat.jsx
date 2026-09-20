import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmm7xbc7x.css';
import '../../css/b/b_jiz4yhu.css';
import '../../css/e/evoe3icyd.css';
import '../../css/v/v_tsg-bbm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tmm7xbc7x"/><path clip-rule="evenodd" class="b_jiz4yhu"/><path clip-rule="evenodd" class="evoe3icyd"/><path class="v_tsg-bbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:round-anchor-point-flat"} {...others} />);
}

export default Component;
