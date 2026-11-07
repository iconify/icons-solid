import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ichbppyyq.css';
import '../../css/a/a2zaddc-d.css';
import '../../css/k/k9s0iqbql.css';
import '../../css/u/ubjcwbpjm.css';
import '../../css/x/xefyw8bax.css';
import '../../css/z/zb3wdhbmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ichbppyyq"/><path class="a2zaddc-d"/><path class="k9s0iqbql"/><path class="ubjcwbpjm"/><path class="xefyw8bax"/><path class="zb3wdhbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:object-scan-bold"} {...others} />);
}

export default Component;
