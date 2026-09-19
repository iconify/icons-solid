import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz2uyujao.css';
import '../../css/f/fj61g7l0m.css';
import '../../css/e/el7ev0b3z.css';
import '../../css/m/m_1h3hg9s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pz2uyujao"/><path clip-rule="evenodd" class="fj61g7l0m"/><path class="el7ev0b3z"/><path clip-rule="evenodd" class="m_1h3hg9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layout-2-outline"} {...others} />);
}

export default Component;
