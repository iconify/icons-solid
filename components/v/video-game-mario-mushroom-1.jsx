import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sptz28b4p.css';
import '../../css/c/ca22gpdyi.css';
import '../../css/f/ft8y4ut8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sptz28b4p"/><path class="ca22gpdyi"/><path class="ft8y4ut8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-game-mario-mushroom-1"} {...others} />);
}

export default Component;
