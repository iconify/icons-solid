import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o_onwfy1m.css';
import '../../css/e/elzvgjb4a.css';
import '../../css/s/sfxgh6bez.css';
import '../../css/d/d8f9mr75j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="o_onwfy1m"/><path class="elzvgjb4a"/><path class="sfxgh6bez"/><path class="d8f9mr75j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-line-duotone"} {...others} />);
}

export default Component;
