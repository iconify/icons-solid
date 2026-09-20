import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c66c8d1xn.css';
import '../../css/e/esrfit-bu.css';
import '../../css/e/ege2gyb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="c66c8d1xn"/><path class="esrfit-bu"/><path class="ege2gyb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:microphone-karaoke-1"} {...others} />);
}

export default Component;
