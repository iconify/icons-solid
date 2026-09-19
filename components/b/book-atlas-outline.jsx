import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xs-u7yzzn.css';
import '../../css/x/x-5hy_bas.css';
import '../../css/w/whpix6b2m.css';
import '../../css/n/n6dololes.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xs-u7yzzn"/><path class="x-5hy_bas"/><path class="whpix6b2m"/><path class="n6dololes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-atlas-outline"} {...others} />);
}

export default Component;
