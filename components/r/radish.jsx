import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/d/d30fg88xi.css';
import '../../css/i/i1p-fpbic.css';
import '../../css/z/z1e2-yy1x.css';
import '../../css/r/r7htufbee.css';
import '../../css/q/qt0l5jqcm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxjLkieYm"><g class="gopnm44um"><path class="d30fg88xi"/><path class="i1p-fpbic"/><path class="z1e2-yy1x"/><path class="r7htufbee"/><path class="qt0l5jqcm"/></g></mask></defs><path mask="url(#SVGxjLkieYm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:radish"} {...others} />);
}

export default Component;
