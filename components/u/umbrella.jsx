import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bmxnbgbnv.css';
import '../../css/s/smf_smbgh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="bmxnbgbnv"/><path class="smf_smbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:umbrella"} {...others} />);
}

export default Component;
