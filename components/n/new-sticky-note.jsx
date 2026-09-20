import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e5tok3bkk.css';
import '../../css/g/gaonsmbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e5tok3bkk"/><path class="gaonsmbbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:new-sticky-note"} {...others} />);
}

export default Component;
