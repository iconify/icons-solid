import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd_zb-bzq.css';
import '../../css/s/sx3gn0ree.css';
import '../../css/y/ysgpzbb2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gd_zb-bzq"/><path class="sx3gn0ree"/><path class="ysgpzbb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:make-up-lipstick"} {...others} />);
}

export default Component;
