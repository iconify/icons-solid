import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwdmfbbev.css';
import '../../css/i/ibd_t9xaj.css';
import '../../css/b/b7vxt34gn.css';
import '../../css/k/kdivkab0n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vwdmfbbev"/><path class="ibd_t9xaj"/><path class="b7vxt34gn"/><path class="kdivkab0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-mail"} {...others} />);
}

export default Component;
