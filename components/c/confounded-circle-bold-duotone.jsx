import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjuz8i9vl.css';
import '../../css/w/w8znvab1d.css';
import '../../css/a/a5xq_ybez.css';
import '../../css/r/rnb90nbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bjuz8i9vl"/><path class="w8znvab1d"/><path class="a5xq_ybez"/><path class="rnb90nbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:confounded-circle-bold-duotone"} {...others} />);
}

export default Component;
