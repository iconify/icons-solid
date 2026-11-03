import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxq_shb0a.css';
import '../../css/p/p21ahybuv.css';
import '../../css/s/s_gdyfb4z.css';
import '../../css/t/tlx7uwvrw.css';
import '../../css/x/x_6g5lh-k.css';
import '../../css/a/azqllhbwu.css';
import '../../css/k/knxcktb8y.css';
import '../../css/n/nzr2yobun.css';

const viewBox = {"width":220,"height":220};
const content = `<path vector-effect="non-scaling-stroke" class="gxq_shb0a"/><path vector-effect="non-scaling-stroke" class="p21ahybuv"/><path vector-effect="non-scaling-stroke" class="s_gdyfb4z"/><path vector-effect="non-scaling-stroke" class="tlx7uwvrw"/><path vector-effect="non-scaling-stroke" class="x_6g5lh-k"/><path vector-effect="non-scaling-stroke" class="azqllhbwu"/><path vector-effect="non-scaling-stroke" class="knxcktb8y"/><path vector-effect="non-scaling-stroke" class="nzr2yobun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:spoolman"} {...others} />);
}

export default Component;
