import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qly-mubbi.css';
import '../../css/g/gi96n6otg.css';
import '../../css/d/dnoqkib5j.css';
import '../../css/s/s83651bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="qly-mubbi"/><path class="gi96n6otg"/><path class="dnoqkib5j"/><path class="s83651bmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:cloud"} {...others} />);
}

export default Component;
