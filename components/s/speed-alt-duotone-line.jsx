import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mqstwk_cf.css';
import '../../css/i/ixhzviblg.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG8SaNDOQi"><g class="t_2lkqbxb"><path class="mqstwk_cf"/><path class="ixhzviblg"/></g></mask></defs><path mask="url(#SVG8SaNDOQi)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:speed-alt-duotone-line"} {...others} />);
}

export default Component;
