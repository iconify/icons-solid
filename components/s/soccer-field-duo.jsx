import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8ryl_bho.css';
import '../../css/g/gwmg8wt9v.css';
import '../../css/e/efp79h8_w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k8ryl_bho"/><path class="gwmg8wt9v"/><path class="efp79h8_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:soccer-field-duo"} {...others} />);
}

export default Component;
