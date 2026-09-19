import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsnnjib_v.css';
import '../../css/m/mnr5v1b0o.css';
import '../../css/s/s-c-ff4lw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="tsnnjib_v"/><path clip-rule="evenodd" class="mnr5v1b0o"/><path class="s-c-ff4lw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-americas-bold"} {...others} />);
}

export default Component;
