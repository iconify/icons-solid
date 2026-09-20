import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g96peuvhk.css';
import '../../css/x/xd22tjbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g96peuvhk"/><path class="xd22tjbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hand"} {...others} />);
}

export default Component;
