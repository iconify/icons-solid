import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/f/fyuscaboy.css';
import '../../css/b/b4jtc2s1i.css';
import '../../css/x/xj-iu9b1e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="fyuscaboy"/><path class="b4jtc2s1i"/><circle class="xj-iu9b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:winking-face-with-open-eyes"} {...others} />);
}

export default Component;
