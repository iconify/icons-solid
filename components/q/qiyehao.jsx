import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jv6pcjbst.css';
import '../../css/h/hasyk_b4b.css';
import '../../css/s/svp4v9b7u.css';
import '../../css/d/dm2mmib_n.css';
import '../../css/o/occf1nb_r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jv6pcjbst"/><path class="hasyk_b4b"/><path class="svp4v9b7u"/><path class="dm2mmib_n"/><path class="occf1nb_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:qiyehao"} {...others} />);
}

export default Component;
