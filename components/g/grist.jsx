import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvf5ks7kl.css';
import '../../css/y/yp9lcc2_w.css';
import '../../css/y/ycm_oobud.css';
import '../../css/z/z02jb9bcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zvf5ks7kl"/><path class="yp9lcc2_w"/><path class="ycm_oobud"/><path class="z02jb9bcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grist"} {...others} />);
}

export default Component;
