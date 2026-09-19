import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/z/z78yszbru.css';
import '../../css/b/bo54uqb8g.css';
import '../../css/j/jv39n-c4r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qtgswnn4u"/><path class="z78yszbru"/><path class="bo54uqb8g"/><path class="jv39n-c4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:email-lock"} {...others} />);
}

export default Component;
