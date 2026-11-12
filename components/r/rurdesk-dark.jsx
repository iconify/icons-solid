import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzxio8blc.css';
import '../../css/t/tsv_okbow.css';
import '../../css/i/ij824bc0n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rzxio8blc"/><path class="tsv_okbow"/><circle class="ij824bc0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rurdesk-dark"} {...others} />);
}

export default Component;
