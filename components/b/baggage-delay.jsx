import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/lbj9g9z9s.css';
import '../../css/r/reeb0u-cw.css';
import '../../css/l/lzo23eb0u.css';
import '../../css/v/v4ugeic-t.css';
import '../../css/s/s6atrbcnl.css';
import '../../css/x/x2jzcbboy.css';
import '../../css/r/r7580zuup.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="lbj9g9z9s"/><path class="reeb0u-cw"/><path class="lzo23eb0u"/><path class="v4ugeic-t"/><path class="s6atrbcnl"/><path class="x2jzcbboy"/><path class="r7580zuup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baggage-delay"} {...others} />);
}

export default Component;
