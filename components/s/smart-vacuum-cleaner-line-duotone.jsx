import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/smmug3biq.css';
import '../../css/h/htapwebmh.css';
import '../../css/g/gshkn9qqt.css';
import '../../css/s/srug0hb7t.css';
import '../../css/w/wyvi3vbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="smmug3biq"/><path class="htapwebmh"/><path class="gshkn9qqt"/><path class="srug0hb7t"/><path class="wyvi3vbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-vacuum-cleaner-line-duotone"} {...others} />);
}

export default Component;
