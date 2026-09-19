import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz_yl0efk.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-3hlxbsn.css';
import '../../css/g/geesqhbwg.css';
import '../../css/x/xmogy0_2h.css';
import '../../css/h/hd7l-yb7d.css';
import '../../css/h/hedj3bbrm.css';
import '../../css/v/v1e3x9bmh.css';

const viewBox = {"width":20,"height":20};
const content = `<defs><path id="iconify-hCy3ce7G" clip-rule="evenodd" class="lz_yl0efk"/></defs><g class="ft5dv1b6b"><use href="#iconify-hCy3ce7G" clip-rule="evenodd" class="n-3hlxbsn"/><path clip-rule="evenodd" class="geesqhbwg"/><circle class="xmogy0_2h"/><circle class="hd7l-yb7d"/><circle class="hedj3bbrm"/><use href="#iconify-hCy3ce7G" clip-rule="evenodd" class="n-3hlxbsn"/><path clip-rule="evenodd" class="v1e3x9bmh"/><circle class="xmogy0_2h"/><circle class="hd7l-yb7d"/><circle class="hedj3bbrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:text-bubble-print"} {...others} />);
}

export default Component;
