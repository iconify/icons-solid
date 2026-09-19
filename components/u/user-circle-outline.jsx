import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t89f95b8p.css';
import '../../css/b/bsnrj6lbv.css';
import '../../css/i/ivdx5lb0c.css';
import '../../css/l/lc2yt8urn.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="t89f95b8p"/><path class="bsnrj6lbv"/><path class="ivdx5lb0c"/><path class="lc2yt8urn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:user-circle-outline"} {...others} />);
}

export default Component;
