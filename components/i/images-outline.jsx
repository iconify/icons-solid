import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m04wr6bxv.css';
import '../../css/h/h3e1u3zis.css';
import '../../css/i/i3c4jibtn.css';
import '../../css/x/xcv5olncc.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m04wr6bxv"/><path class="h3e1u3zis"/><path class="i3c4jibtn"/><path class="xcv5olncc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:images-outline"} {...others} />);
}

export default Component;
