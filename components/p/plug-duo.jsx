import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/triuozb4n.css';
import '../../css/h/hnyrl4-sq.css';
import '../../css/z/z2ib2i8il.css';
import '../../css/x/x9vby1b4g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="triuozb4n"/><path class="hnyrl4-sq"/><path class="z2ib2i8il"/><path class="x9vby1b4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:plug-duo"} {...others} />);
}

export default Component;
