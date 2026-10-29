import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/a/al_hgmb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lhr7mp78x"/><path class="al_hgmb2q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-fog"} {...others} />);
}

export default Component;
