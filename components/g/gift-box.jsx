import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/blna7_bzy.css';
import '../../css/m/mml5fobfh.css';
import '../../css/w/wywfouyra.css';
import '../../css/j/jc6vycb-x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8e4GgbgE"><g class="wwvp95byt"><path class="blna7_bzy"/><path class="mml5fobfh"/><path class="wywfouyra"/><path class="jc6vycb-x"/></g></mask></defs><path mask="url(#SVG8e4GgbgE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gift-box"} {...others} />);
}

export default Component;
