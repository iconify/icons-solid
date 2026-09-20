import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjph59xfl.css';
import '../../css/p/pg557kbil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjph59xfl"/><path class="pg557kbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:face-thinking-solid"} {...others} />);
}

export default Component;
