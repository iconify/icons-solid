import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuvplbckt.css';
import '../../css/n/n7ffj_asf.css';
import '../../css/c/crzhrw1pi.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vuvplbckt"/><path class="n7ffj_asf"/><path class="crzhrw1pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:centos"} {...others} />);
}

export default Component;
