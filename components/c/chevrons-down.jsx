import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvcrazevp.css';
import '../../css/q/qxgawhb1k.css';
import '../../css/j/jh7f7fdka.css';
import '../../css/k/kr366n3vw.css';
import '../../css/v/v352nk97z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvcrazevp wm-shadow"/><path class="qxgawhb1k wm-k"/><path class="jh7f7fdka wm-k"/><path class="kr366n3vw wm-a"/><path class="v352nk97z wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chevrons-down"} {...others} />);
}

export default Component;
