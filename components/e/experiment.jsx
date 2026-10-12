import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz_gpjb-q.css';
import '../../css/f/fd5m_9b2i.css';
import '../../css/l/l5bme_e1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cz_gpjb-q"/><path class="fd5m_9b2i"/><path class="l5bme_e1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:experiment"} {...others} />);
}

export default Component;
