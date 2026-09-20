import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xr9ce2-6g.css';
import '../../css/m/mke14_-qz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xr9ce2-6g"/><path class="mke14_-qz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:garbage-bin"} {...others} />);
}

export default Component;
