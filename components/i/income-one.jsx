import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dfkbuedbm.css';
import '../../css/p/pkxz-c0io.css';
import '../../css/r/r6i4urb7t.css';
import '../../css/w/wnzobsbpe.css';
import '../../css/y/ykl-sntit.css';
import '../../css/u/u6lajz8ii.css';
import '../../css/l/lw-ze2xtv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dfkbuedbm"/><path class="pkxz-c0io"/><path class="r6i4urb7t"/><path class="wnzobsbpe"/><path class="ykl-sntit"/><path class="u6lajz8ii"/><path class="lw-ze2xtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:income-one"} {...others} />);
}

export default Component;
