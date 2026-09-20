import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jc551fbod.css';
import '../../css/s/s4y-3xbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jc551fbod"/><path class="s4y-3xbwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-circles-x-fill"} {...others} />);
}

export default Component;
