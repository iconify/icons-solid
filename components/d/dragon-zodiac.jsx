import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/b/b685dd70v.css';
import '../../css/h/h924rebcs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="b685dd70v"/><path class="h924rebcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dragon-zodiac"} {...others} />);
}

export default Component;
