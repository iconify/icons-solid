import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f8eyw1sna.css';
import '../../css/u/u1jc8vaze.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="h01tyzbfu"><path class="f8eyw1sna"/><path class="u1jc8vaze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:phone-two"} {...others} />);
}

export default Component;
