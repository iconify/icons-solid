import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x9ovypa8r.css';
import '../../css/z/z1itzbcot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x9ovypa8r"/><path class="z1itzbcot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:photo-frame"} {...others} />);
}

export default Component;
