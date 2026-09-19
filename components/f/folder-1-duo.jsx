import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6l7y_btx.css';
import '../../css/i/iuk1pacbe.css';
import '../../css/f/fjq20bbkm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h6l7y_btx"/><path class="iuk1pacbe"/><path class="fjq20bbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:folder-1-duo"} {...others} />);
}

export default Component;
