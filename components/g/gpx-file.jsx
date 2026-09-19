import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3ht4pbgq.css';
import '../../css/j/jqc7hmb-f.css';
import '../../css/z/zoar6acpn.css';
import '../../css/l/lrhlp9bgs.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="o3ht4pbgq"/><path class="jqc7hmb-f"/><path class="zoar6acpn"/><path class="lrhlp9bgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:gpx-file"} {...others} />);
}

export default Component;
