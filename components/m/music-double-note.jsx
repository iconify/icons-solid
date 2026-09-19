import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pkdyklbrl.css';
import '../../css/z/z4shp3bcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pkdyklbrl"/><path class="z4shp3bcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:music-double-note"} {...others} />);
}

export default Component;
