import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hd02y12rp.css';
import '../../css/q/qsbzrubpd.css';
import '../../css/k/kbx3sm00e.css';
import '../../css/c/c9jjgfb6r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="hd02y12rp"/><path class="qsbzrubpd"/><path class="kbx3sm00e"/><path class="c9jjgfb6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-display-one"} {...others} />);
}

export default Component;
