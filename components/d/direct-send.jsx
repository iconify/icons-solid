import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/buo0j4o3v.css';
import '../../css/a/ayno9gbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="buo0j4o3v"/><path class="ayno9gbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:direct-send"} {...others} />);
}

export default Component;
