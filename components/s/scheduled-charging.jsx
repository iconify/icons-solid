import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tdgve6hdl.css';
import '../../css/r/rvxs6mbfh.css';
import '../../css/y/yxq0mnbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="tdgve6hdl"/><path class="rvxs6mbfh"/><path class="yxq0mnbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:scheduled-charging"} {...others} />);
}

export default Component;
