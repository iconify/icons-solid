import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/o/o5i_ci7js.css';
import '../../css/z/zraqpcbts.css';
import '../../css/w/w8tnpgblz.css';
import '../../css/v/vuc6h4bcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="xhdah4bbl"/><path class="o5i_ci7js"/><path class="zraqpcbts"/><path class="w8tnpgblz"/><path class="vuc6h4bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:excel-one"} {...others} />);
}

export default Component;
