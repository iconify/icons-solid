import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/droj9cnwk.css';
import '../../css/i/iydim6b0y.css';
import '../../css/a/a-u-nibzd.css';
import '../../css/m/mdfog5bdc.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="droj9cnwk"/><path class="iydim6b0y"/><path class="a-u-nibzd"/><path class="mdfog5bdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:apple-outline"} {...others} />);
}

export default Component;
