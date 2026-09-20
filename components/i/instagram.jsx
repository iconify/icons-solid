import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak_npccsm.css';
import '../../css/n/n14m7qbat.css';
import '../../css/s/sb5o2gexg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ak_npccsm"/><circle class="n14m7qbat"/><circle class="sb5o2gexg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:instagram"} {...others} />);
}

export default Component;
