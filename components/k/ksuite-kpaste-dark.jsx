import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k63sfyide.css';
import '../../css/x/xgxd9qb_o.css';
import '../../css/z/zuvme35ny.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k63sfyide"/><path class="xgxd9qb_o"/><path class="zuvme35ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kpaste-dark"} {...others} />);
}

export default Component;
