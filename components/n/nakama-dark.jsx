import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjio485oq.css';
import '../../css/b/bfmu8u6wq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xjio485oq"/><path class="bfmu8u6wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nakama-dark"} {...others} />);
}

export default Component;
