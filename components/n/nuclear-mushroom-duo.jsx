import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pwebkqbdb.css';
import '../../css/p/pxqnwab7l.css';
import '../../css/w/wm8jtpa0p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="pwebkqbdb"/><path class="pxqnwab7l"/><path class="wm8jtpa0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:nuclear-mushroom-duo"} {...others} />);
}

export default Component;
