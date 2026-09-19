import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f12n77b0y.css';
import '../../css/i/igl--8b1c.css';
import '../../css/g/g63pph37i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="f12n77b0y"/><path class="igl--8b1c"/><path class="g63pph37i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:elevator-duo"} {...others} />);
}

export default Component;
