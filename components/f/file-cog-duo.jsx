import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h39yknwhx.css';
import '../../css/z/z2owcnb2l.css';
import '../../css/q/q8vdfbk1f.css';
import '../../css/j/j6807mbiw.css';
import '../../css/z/z4bbp2bhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h39yknwhx"/><path class="wm-s z2owcnb2l"/><path class="q8vdfbk1f wm-s"/><path class="j6807mbiw"/><path class="wm-a z4bbp2bhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-cog-duo"} {...others} />);
}

export default Component;
