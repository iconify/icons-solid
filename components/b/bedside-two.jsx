import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/ikv0cf_ej.css';
import '../../css/x/xrfb8lxqn.css';
import '../../css/d/dhwiorbcw.css';
import '../../css/l/lq5tyun_b.css';
import '../../css/f/fzy80jy4t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGckWHrYLP"><g class="wwvp95byt"><path class="ikv0cf_ej"/><path class="xrfb8lxqn"/><path class="dhwiorbcw"/><path clip-rule="evenodd" class="lq5tyun_b"/><path class="fzy80jy4t"/></g></mask></defs><path mask="url(#SVGckWHrYLP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bedside-two"} {...others} />);
}

export default Component;
