import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oh_1-ibvf.css';
import '../../css/j/jz-bisbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oh_1-ibvf"/><path class="jz-bisbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:media-image-plus"} {...others} />);
}

export default Component;
