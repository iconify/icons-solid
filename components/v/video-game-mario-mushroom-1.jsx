import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c3-vr29xh.css';
import '../../css/b/bixa75bad.css';
import '../../css/o/ou8i0etgx.css';
import '../../css/k/kyx_bcc0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="c3-vr29xh"/><path class="bixa75bad"/><path class="ou8i0etgx"/><path class="kyx_bcc0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-game-mario-mushroom-1"} {...others} />);
}

export default Component;
