import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym6wy1brw.css';
import '../../css/g/gtz84wbsv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ym6wy1brw"/><path class="gtz84wbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:open-dronelog"} {...others} />);
}

export default Component;
