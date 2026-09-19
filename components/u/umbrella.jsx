import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xopesd3iw.css';
import '../../css/s/smf_smbgh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="xopesd3iw"/><path class="smf_smbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:umbrella"} {...others} />);
}

export default Component;
