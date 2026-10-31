import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh9j6mi2w.css';
import '../../css/m/myx7ffs3u.css';
import '../../css/b/b4shz3b4f.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="xh9j6mi2w"/><path class="myx7ffs3u"/><path class="b4shz3b4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:de"} {...others} />);
}

export default Component;
