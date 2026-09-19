import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r25ikwpza.css';
import '../../css/h/hihhk-b3v.css';
import '../../css/l/lr9f57apr.css';
import '../../css/p/p5ykwhtgk.css';
import '../../css/l/l-k_nibkr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyT21rbJP"><g class="aql7dnt-u"><path class="r25ikwpza"/><path class="hihhk-b3v"/><path class="lr9f57apr"/><path class="p5ykwhtgk"/><path class="l-k_nibkr"/></g></mask></defs><path mask="url(#SVGyT21rbJP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:dribble"} {...others} />);
}

export default Component;
