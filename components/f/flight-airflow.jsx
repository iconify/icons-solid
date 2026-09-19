import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/f/f43rkvbca.css';
import '../../css/v/v31f7nbht.css';
import '../../css/h/hh9gxlbei.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="f43rkvbca"/><path class="v31f7nbht"/><path class="hh9gxlbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:flight-airflow"} {...others} />);
}

export default Component;
