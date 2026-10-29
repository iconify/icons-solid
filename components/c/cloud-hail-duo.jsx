import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/foupoebia.css';
import '../../css/n/nbkxrlb2b.css';
import '../../css/d/df_konclx.css';
import '../../css/l/lhr7mp78x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="foupoebia"/><path class="nbkxrlb2b wm-a"/><path class="df_konclx wm-a"/><path class="lhr7mp78x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-hail-duo"} {...others} />);
}

export default Component;
