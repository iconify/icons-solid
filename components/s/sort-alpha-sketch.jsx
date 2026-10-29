import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vlc8tibye.css';
import '../../css/v/vm2k2nbdb.css';
import '../../css/j/jnfxqfkap.css';
import '../../css/b/biro68bio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vlc8tibye wm-k"/><path class="vm2k2nbdb wm-a"/><path class="jnfxqfkap wm-k"/><path class="biro68bio wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sort-alpha-sketch"} {...others} />);
}

export default Component;
