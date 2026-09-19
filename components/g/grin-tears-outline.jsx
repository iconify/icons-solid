import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-kk51bsn.css';
import '../../css/a/asbi-uwfa.css';
import '../../css/d/deju6fb9n.css';
import '../../css/x/xjd58kxuc.css';
import '../../css/h/h33ui5bld.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="r-kk51bsn"/><path clip-rule="evenodd" class="asbi-uwfa"/><path class="deju6fb9n"/><path clip-rule="evenodd" class="xjd58kxuc"/><path class="h33ui5bld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-tears-outline"} {...others} />);
}

export default Component;
