import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/h/huth-8c1f.css';
import '../../css/v/vd4qirmma.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="to-5kdesz"><path class="huth-8c1f"/><path class="vd4qirmma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stream"} {...others} />);
}

export default Component;
