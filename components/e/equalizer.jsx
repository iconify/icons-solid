import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rwog68bpz.css';
import '../../css/b/bymqqb55b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0J7ARb6P"><g class="v3_i3wktz"><path class="rwog68bpz"/><path class="bymqqb55b"/></g></mask></defs><path mask="url(#SVG0J7ARb6P)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:equalizer"} {...others} />);
}

export default Component;
