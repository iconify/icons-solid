import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk1_sxblw.css';
import '../../css/j/jqc7hmb-f.css';
import '../../css/s/sm_isp06h.css';
import '../../css/o/o8ff8w-sp.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="jk1_sxblw"/><path class="jqc7hmb-f"/><path class="sm_isp06h"/><path class="o8ff8w-sp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:sld"} {...others} />);
}

export default Component;
