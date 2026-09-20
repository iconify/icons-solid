import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hb2atdblt.css';
import '../../css/o/oh-ffpj9g.css';
import '../../css/o/ou2j_7qjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hb2atdblt"/><path class="oh-ffpj9g"/><path class="ou2j_7qjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-left-broken"} {...others} />);
}

export default Component;
