import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zpjmlyb6u.css';
import '../../css/b/bnu31fboh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zpjmlyb6u"/><path class="bnu31fboh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:microsoft-windows-logo-1"} {...others} />);
}

export default Component;
