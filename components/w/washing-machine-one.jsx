import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynr5zrbxp.css';
import '../../css/m/mqa_-ub1a.css';
import '../../css/g/ghy5e64mw.css';
import '../../css/p/pl7f1-bfq.css';
import '../../css/h/h4nr8wacg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="ynr5zrbxp"/><path class="mqa_-ub1a"/><circle class="ghy5e64mw"/><circle class="pl7f1-bfq"/><circle class="h4nr8wacg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:washing-machine-one"} {...others} />);
}

export default Component;
