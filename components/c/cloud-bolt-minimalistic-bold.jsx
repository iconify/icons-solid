import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srdp-xb5r.css';
import '../../css/l/lqidd2bkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="srdp-xb5r"/><path class="lqidd2bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-bolt-minimalistic-bold"} {...others} />);
}

export default Component;
