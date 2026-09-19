import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/sldzc8nfd.css';
import '../../css/z/zyc580b6o.css';
import '../../css/a/ajp046sjq.css';
import '../../css/m/m978_zbnq.css';
import '../../css/t/ti7vb9bqn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="sldzc8nfd"/><path class="zyc580b6o"/><path class="ajp046sjq"/><path class="m978_zbnq"/><path class="ti7vb9bqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:prescription"} {...others} />);
}

export default Component;
