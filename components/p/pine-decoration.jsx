import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hgq1ffbnd.css';
import '../../css/o/o0y79pbjv.css';
import '../../css/x/xg56dnfkt.css';
import '../../css/v/vb19-4v6d.css';
import '../../css/q/q9p1f_-5i.css';
import '../../css/a/aq_7xto3j.css';
import '../../css/f/fqacuk9rm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hgq1ffbnd"/><path class="o0y79pbjv"/><path class="xg56dnfkt"/><path class="vb19-4v6d"/><path class="q9p1f_-5i"/><path class="aq_7xto3j"/><path class="fqacuk9rm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pine-decoration"} {...others} />);
}

export default Component;
