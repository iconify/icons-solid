import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lgmhfxbmw.css';
import '../../css/y/yudrnbc3k.css';
import '../../css/f/f93lxhbsl.css';
import '../../css/u/us-isqd7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lgmhfxbmw"/><path class="yudrnbc3k"/><path class="f93lxhbsl"/><path class="us-isqd7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:articles"} {...others} />);
}

export default Component;
