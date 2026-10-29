import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af2fd6bsu.css';
import '../../css/m/m_c2wqbtv.css';
import '../../css/g/gk8n_8arz.css';
import '../../css/x/xbhxr_b1b.css';
import '../../css/x/x0bq8s5zl.css';
import '../../css/c/chpj2ybip.css';
import '../../css/r/rtkdqclce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="af2fd6bsu wm-a"/><path class="m_c2wqbtv wm-a"/><path class="gk8n_8arz wm-a"/><path class="wm-k xbhxr_b1b"/><path class="wm-k x0bq8s5zl"/><path class="chpj2ybip wm-k"/><path class="rtkdqclce wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:hammer"} {...others} />);
}

export default Component;
