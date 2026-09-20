import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhh36j3im.css';
import '../../css/o/o4dxr6o6a.css';
import '../../css/l/l9h6ydbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mhh36j3im"/><path class="o4dxr6o6a"/><path class="l9h6ydbxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gesture-pray"} {...others} />);
}

export default Component;
