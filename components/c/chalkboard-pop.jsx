import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0gouom1v.css';
import '../../css/l/lu7mpmx6f.css';
import '../../css/b/bmuj7mt3a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="e0gouom1v"/><path class="lu7mpmx6f"/><path class="bmuj7mt3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:chalkboard-pop"} {...others} />);
}

export default Component;
