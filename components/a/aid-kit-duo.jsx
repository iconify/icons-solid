import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttbiemmoy.css';
import '../../css/j/j1gg5rbgb.css';
import '../../css/b/bunbr1brm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ttbiemmoy"/><path clip-rule="evenodd" class="j1gg5rbgb"/><path class="bunbr1brm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:aid-kit-duo"} {...others} />);
}

export default Component;
