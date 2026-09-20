import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zfopdhy3l.css';
import '../../css/c/c984gybxi.css';
import '../../css/u/uwgnrnbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zfopdhy3l"/><path class="c984gybxi"/><path class="uwgnrnbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-player-slider"} {...others} />);
}

export default Component;
