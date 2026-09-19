import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/k/kn9vitymh.css';
import '../../css/w/wz7tiec4e.css';
import '../../css/g/gscjf6uxr.css';
import '../../css/o/o1zhvxbql.css';
import '../../css/e/e0ps1gbcy.css';
import '../../css/r/ro71gokoa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="kn9vitymh"/><path class="wz7tiec4e"/><path class="gscjf6uxr"/><path class="o1zhvxbql"/><path class="e0ps1gbcy"/><path class="ro71gokoa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:margin-one"} {...others} />);
}

export default Component;
