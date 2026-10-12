import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls7mndy5c.css';
import '../../css/h/hh7g4t-os.css';
import '../../css/b/bzu86gbjz.css';
import '../../css/k/kj2p9jxqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ls7mndy5c"/><path class="hh7g4t-os"/><path class="bzu86gbjz"/><path class="kj2p9jxqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ship-front"} {...others} />);
}

export default Component;
