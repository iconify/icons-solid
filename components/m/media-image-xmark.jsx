import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oyvj3vu2o.css';
import '../../css/o/oh_1-ibvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oyvj3vu2o"/><path class="oh_1-ibvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:media-image-xmark"} {...others} />);
}

export default Component;
