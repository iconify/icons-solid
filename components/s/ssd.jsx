import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-862obek.css';
import '../../css/l/l1kzepb4b.css';
import '../../css/u/ui0aave7u.css';
import '../../css/r/r1jj-i9hv.css';
import '../../css/l/l2ibw8b9c.css';
import '../../css/i/ihhu9cbpz.css';
import '../../css/v/v3lu1jijh.css';
import '../../css/t/thwemd3eh.css';
import '../../css/h/h3xs1-b9x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y-862obek"/><path class="l1kzepb4b"/><path class="ui0aave7u"/><path class="r1jj-i9hv"/><path class="l2ibw8b9c"/><path class="ihhu9cbpz"/><path class="v3lu1jijh"/><circle class="thwemd3eh"/><path class="h3xs1-b9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ssd"} {...others} />);
}

export default Component;
