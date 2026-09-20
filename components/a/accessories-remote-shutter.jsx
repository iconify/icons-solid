import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m58ggcg7w.css';
import '../../css/a/aibz0obnx.css';
import '../../css/o/obrj8v2ee.css';
import '../../css/r/ryi58rzir.css';
import '../../css/h/hg229cc5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m58ggcg7w"/><path class="aibz0obnx"/><path class="obrj8v2ee"/><path class="ryi58rzir"/><path class="hg229cc5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:accessories-remote-shutter"} {...others} />);
}

export default Component;
