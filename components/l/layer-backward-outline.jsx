import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/ju2v4eblp.css';
import '../../css/e/efrkp9byv.css';
import '../../css/s/s8ogcvbvw.css';
import '../../css/v/vbjxz-bhh.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ju2v4eblp"/><path class="efrkp9byv"/><path class="s8ogcvbvw"/><path class="vbjxz-bhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-backward-outline"} {...others} />);
}

export default Component;
