import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6r_4vb3z.css';
import '../../css/c/cw47yzbif.css';
import '../../css/n/nm2wr6boy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="s6r_4vb3z"/><path class="cw47yzbif"/><path class="nm2wr6boy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rain-1-duo"} {...others} />);
}

export default Component;
