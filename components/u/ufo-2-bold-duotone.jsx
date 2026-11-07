import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skwlcbjvi.css';
import '../../css/e/ee65gl2ge.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/pvz-nrbjs.css';
import '../../css/w/w63jv9baz.css';
import '../../css/l/ll913_fwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="skwlcbjvi"/><path class="ee65gl2ge"/><g class="xtpeb-edw"><path class="pvz-nrbjs"/><path class="w63jv9baz"/><path class="ll913_fwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-bold-duotone"} {...others} />);
}

export default Component;
