import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_64j2bck.css';
import '../../css/a/ao9inwbnl.css';
import '../../css/z/zduyjj29s.css';
import '../../css/m/mtc92wbsn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_64j2bck"/><path class="ao9inwbnl"/><path class="zduyjj29s"/><path class="mtc92wbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:peertube"} {...others} />);
}

export default Component;
