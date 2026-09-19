import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jnrkizjmb.css';
import '../../css/p/piwt2cbrl.css';
import '../../css/t/te7ulsb0o.css';
import '../../css/x/xgwa2qbbl.css';
import '../../css/o/opakkwbyw.css';
import '../../css/d/djk55y77a.css';
import '../../css/q/qiopyh2cw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jnrkizjmb"/><path class="piwt2cbrl"/><path class="te7ulsb0o"/><path class="xgwa2qbbl"/><path class="opakkwbyw"/><path class="djk55y77a"/><path class="qiopyh2cw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:texture"} {...others} />);
}

export default Component;
