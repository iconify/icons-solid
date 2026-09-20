import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s_n95ss7m.css';
import '../../css/p/p7x4debfp.css';
import '../../css/h/hyzgvfpti.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="s_n95ss7m"/><path class="p7x4debfp"/><path class="hyzgvfpti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:lock-comment-security"} {...others} />);
}

export default Component;
