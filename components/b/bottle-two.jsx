import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/b/bgkze4e7q.css';
import '../../css/k/kn_2t0bjv.css';
import '../../css/k/ktgvdwb7j.css';
import '../../css/x/xusl85bge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZ2KWNSfL"><g class="gopnm44um"><path class="bgkze4e7q"/><path class="kn_2t0bjv"/><path class="ktgvdwb7j"/><path class="xusl85bge"/></g></mask></defs><path mask="url(#SVGZ2KWNSfL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bottle-two"} {...others} />);
}

export default Component;
