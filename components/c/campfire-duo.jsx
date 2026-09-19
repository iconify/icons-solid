import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4ksn1eet.css';
import '../../css/e/eh5vnvbnx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="p4ksn1eet"/><path class="eh5vnvbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:campfire-duo"} {...others} />);
}

export default Component;
