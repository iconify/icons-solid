import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp-vsxb4f.css';
import '../../css/y/ywt6ec0ao.css';
import '../../css/n/n8kwb1zdl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bp-vsxb4f"/><path class="ywt6ec0ao"/><path class="n8kwb1zdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rhel-light"} {...others} />);
}

export default Component;
