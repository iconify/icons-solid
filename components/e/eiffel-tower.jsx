import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/f/ficsk2bir.css';
import '../../css/p/p6oaylbds.css';
import '../../css/m/m8lwrfbbj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ficsk2bir"/><path class="p6oaylbds"/><path class="m8lwrfbbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:eiffel-tower"} {...others} />);
}

export default Component;
