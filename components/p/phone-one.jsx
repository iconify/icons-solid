import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oci7hcchh.css';
import '../../css/t/tkosiltjw.css';
import '../../css/e/e5me6yb6c.css';
import '../../css/a/adgwjrlpa.css';
import '../../css/v/vzvmmremj.css';
import '../../css/s/scnkhqbbz.css';
import '../../css/p/p_riwtf2g.css';
import '../../css/w/wq4p0r7-p.css';
import '../../css/u/ukrerbbsa.css';
import '../../css/w/w9cy2uk1w.css';
import '../../css/c/co3iamb4s.css';
import '../../css/j/j95rsv42e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="oci7hcchh"/><rect class="tkosiltjw"/><rect class="e5me6yb6c"/><circle class="adgwjrlpa"/><circle class="vzvmmremj"/><circle class="scnkhqbbz"/><circle class="p_riwtf2g"/><circle class="wq4p0r7-p"/><circle class="ukrerbbsa"/><circle class="w9cy2uk1w"/><circle class="co3iamb4s"/><circle class="j95rsv42e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone-one"} {...others} />);
}

export default Component;
