import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x-ymtbc4e.css';
import '../../css/b/bxalf-bwl.css';
import '../../css/w/w65gac1-t.css';
import '../../css/d/d7iutdlja.css';
import '../../css/a/atxso7beg.css';
import '../../css/p/pb7vhgg4x.css';
import '../../css/f/fmwi3epxa.css';
import '../../css/d/d1mv64a8d.css';
import '../../css/s/swki9eb5y.css';
import '../../css/y/y_9g--b1k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="x-ymtbc4e"/><path class="bxalf-bwl"/><path class="w65gac1-t"/><path class="d7iutdlja"/><path class="atxso7beg"/><path class="pb7vhgg4x"/><path class="fmwi3epxa"/><path class="d1mv64a8d"/><path class="swki9eb5y"/><path class="y_9g--b1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:calendar-three"} {...others} />);
}

export default Component;
