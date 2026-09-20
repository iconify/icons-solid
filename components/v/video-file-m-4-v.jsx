import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u0sn4oz_l.css';
import '../../css/j/jt_ddwb9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u0sn4oz_l"/><path class="jt_ddwb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-file-m-4-v"} {...others} />);
}

export default Component;
