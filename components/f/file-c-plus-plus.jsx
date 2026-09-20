import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/put8dwbue.css';
import '../../css/x/xbr7_ab0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="put8dwbue"/><path class="xbr7_ab0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:file-c-plus-plus"} {...others} />);
}

export default Component;
