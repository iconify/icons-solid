import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyjy3kbll.css';
import '../../css/p/p_067m8_e.css';
import '../../css/v/va1a_7b_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lyjy3kbll"/><path class="p_067m8_e"/><path class="va1a_7b_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nftx"} {...others} />);
}

export default Component;
