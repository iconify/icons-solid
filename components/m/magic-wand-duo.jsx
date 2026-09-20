import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8flcdbca.css';
import '../../css/r/rrthikbum.css';
import '../../css/w/wmp9ivcdk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k8flcdbca"/><path class="rrthikbum"/><path class="wmp9ivcdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:magic-wand-duo"} {...others} />);
}

export default Component;
