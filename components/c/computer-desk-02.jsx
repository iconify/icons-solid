import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l-t8ute4j.css';
import '../../css/m/m_-vx9hbm.css';
import '../../css/h/hx6mz-bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="l-t8ute4j"/><path class="m_-vx9hbm"/><path class="hx6mz-bsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:computer-desk-02"} {...others} />);
}

export default Component;
