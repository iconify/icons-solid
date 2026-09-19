import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edma09bwf.css';
import '../../css/v/v95dk2b5y.css';
import '../../css/a/ajl63wb3e.css';
import '../../css/j/jlrxhrbhg.css';
import '../../css/l/l-nl-3b6v.css';
import '../../css/h/hedjx-bpi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="edma09bwf"/><rect class="v95dk2b5y"/><rect class="ajl63wb3e"/><rect class="jlrxhrbhg"/><rect class="l-nl-3b6v"/><path class="hedjx-bpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:memory-one"} {...others} />);
}

export default Component;
