import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6brtmb2k.css';
import '../../css/p/p-2h8ebhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6brtmb2k"/><path class="p-2h8ebhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:download-alt"} {...others} />);
}

export default Component;
