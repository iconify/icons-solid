import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogbh2qo3x.css';
import '../../css/r/rr_pm1b7q.css';
import '../../css/u/ucafw4brw.css';
import '../../css/m/m11kaybbv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ogbh2qo3x"/><path class="rr_pm1b7q"/><path class="ucafw4brw"/><path class="m11kaybbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:koel"} {...others} />);
}

export default Component;
