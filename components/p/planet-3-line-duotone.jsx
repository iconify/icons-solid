import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n75jjimak.css';
import '../../css/s/sxlf-3tyn.css';
import '../../css/g/gshkn9qqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n75jjimak"/><path class="sxlf-3tyn"/><path class="gshkn9qqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-3-line-duotone"} {...others} />);
}

export default Component;
