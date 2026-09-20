import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-xy-f28v.css';
import '../../css/j/jm0rthp2o.css';
import '../../css/q/qi8if-1on.css';
import '../../css/y/ywzypccoa.css';
import '../../css/b/balm90a9w.css';
import '../../css/m/m35sf4cix.css';
import '../../css/a/ag-h53lzu.css';
import '../../css/h/h4tjmvy4r.css';
import '../../css/q/qpwhxifcp.css';
import '../../css/e/eiivqw4ec.css';
import '../../css/e/ek5nksyew.css';
import '../../css/b/bklsrketr.css';
import '../../css/i/ijkx8gehd.css';
import '../../css/i/iwdb1l_gc.css';
import '../../css/f/fqj5vrb4l.css';
import '../../css/v/vgtoopdzl.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGTqCe86uO" class="c-xy-f28v"/></defs><path class="jm0rthp2o"/><path class="qi8if-1on"/><path class="ywzypccoa"/><path class="balm90a9w"/><use href="#SVGTqCe86uO"/><use href="#SVGTqCe86uO"/><path class="m35sf4cix"/><path class="ag-h53lzu"/><path class="h4tjmvy4r"/><path class="qpwhxifcp"/><path class="eiivqw4ec"/><path class="ek5nksyew"/><path class="bklsrketr"/><path class="ijkx8gehd"/><path class="iwdb1l_gc"/><path class="fqj5vrb4l"/><path class="vgtoopdzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:snake"} {...others} />);
}

export default Component;
