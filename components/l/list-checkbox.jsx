import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2x65gbdk.css';
import '../../css/o/ol815kb_g.css';
import '../../css/l/lw1pth8-k.css';
import '../../css/c/c3zmt9oyy.css';
import '../../css/z/zfgklkbrb.css';
import '../../css/c/chbiw2blv.css';
import '../../css/d/d0f7zxwtd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j2x65gbdk"/><path class="ol815kb_g"/><path clip-rule="evenodd" class="lw1pth8-k"/><path class="c3zmt9oyy"/><path clip-rule="evenodd" class="zfgklkbrb"/><path class="chbiw2blv"/><path class="d0f7zxwtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:list-checkbox"} {...others} />);
}

export default Component;
