import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egs2dvbel.css';
import '../../css/i/iipiqypwr.css';
import '../../css/y/yy_xetbre.css';
import '../../css/h/hzizrvbcn.css';
import '../../css/c/cgzp42rlg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="egs2dvbel"/><rect class="iipiqypwr"/><rect class="yy_xetbre"/><rect class="hzizrvbcn"/><path class="cgzp42rlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:between-horizontal-right"} {...others} />);
}

export default Component;
