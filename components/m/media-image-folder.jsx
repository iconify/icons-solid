import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/guf68bb-o.css';
import '../../css/o/o6a29nfjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="guf68bb-o"/><path class="o6a29nfjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:media-image-folder"} {...others} />);
}

export default Component;
