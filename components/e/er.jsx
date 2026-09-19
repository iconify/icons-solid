import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rcqvzqbeh.css';
import '../../css/v/vjs6n8g7s.css';
import '../../css/w/wj2hrmbia.css';
import '../../css/v/vm5kak9_o.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rcqvzqbeh"/><path class="vjs6n8g7s"/><path class="wj2hrmbia"/><path class="vm5kak9_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:er"} {...others} />);
}

export default Component;
