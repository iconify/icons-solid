import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hb2wnyo4t.css';
import '../../css/f/fagghvdpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hb2wnyo4t"/><path class="fagghvdpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clock2"} {...others} />);
}

export default Component;
