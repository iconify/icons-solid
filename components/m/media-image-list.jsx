import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/ro-_17b1w.css';
import '../../css/d/dc95v3gtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ro-_17b1w"/><path class="dc95v3gtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:media-image-list"} {...others} />);
}

export default Component;
