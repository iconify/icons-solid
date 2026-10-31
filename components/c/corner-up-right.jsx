import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/no1-bgbjz.css';
import '../../css/o/o-qm43b0z.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="no1-bgbjz wm-k"/><path class="o-qm43b0z wm-a"/><path class="wcaq-jbkf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:corner-up-right"} {...others} />);
}

export default Component;
