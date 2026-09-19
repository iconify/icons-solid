import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hl37twb8p.css';
import '../../css/g/g9-w34b8m.css';
import '../../css/c/cevz4m89c.css';
import '../../css/i/iusogikjz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hl37twb8p"/><path clip-rule="evenodd" class="g9-w34b8m"/><rect class="cevz4m89c"/><rect class="iusogikjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:ying-yang"} {...others} />);
}

export default Component;
