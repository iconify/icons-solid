import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vatmurbwg.css';
import '../../css/k/kkemslb3s.css';
import '../../css/c/cwsvb_vrl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vatmurbwg"/><path clip-rule="evenodd" class="kkemslb3s"/><path class="cwsvb_vrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout-duo"} {...others} />);
}

export default Component;
