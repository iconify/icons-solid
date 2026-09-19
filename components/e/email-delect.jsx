import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/z/z78yszbru.css';
import '../../css/y/yrx0b2b3f.css';
import '../../css/p/p1h0mh26u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qtgswnn4u"/><path class="z78yszbru"/><path class="yrx0b2b3f"/><path class="p1h0mh26u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:email-delect"} {...others} />);
}

export default Component;
