import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/a/acxaut9dg.css';
import '../../css/e/e8rfkrl8b.css';
import '../../css/x/xh_6oghmq.css';
import '../../css/w/wi-29gbpm.css';
import '../../css/f/fq7k81_ur.css';
import '../../css/s/so8nt2pip.css';
import '../../css/r/rh63z6mpg.css';
import '../../css/p/pjqmx8b7g.css';
import '../../css/e/ejzeylb9r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="acxaut9dg"/><path class="e8rfkrl8b"/><path class="xh_6oghmq"/><path class="wi-29gbpm"/><path class="fq7k81_ur"/><path class="so8nt2pip"/><path class="rh63z6mpg"/><path class="pjqmx8b7g"/><path class="ejzeylb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:microphone"} {...others} />);
}

export default Component;
