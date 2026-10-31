import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/i/ick6dj6dx.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ejg_wxkov wm-k"/><path class="wm-a xa3jgydgh"/><path class="ick6dj6dx wm-s"/><path class="wcaq-jbkf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:heading-1"} {...others} />);
}

export default Component;
