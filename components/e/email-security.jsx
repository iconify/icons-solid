import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/t/t4c1a1byr.css';
import '../../css/z/z78yszbru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qtgswnn4u"/><path class="t4c1a1byr"/><path class="z78yszbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:email-security"} {...others} />);
}

export default Component;
