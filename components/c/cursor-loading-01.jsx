import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eg38gebaa.css';
import '../../css/s/spv1s3wtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eg38gebaa"/><path class="spv1s3wtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-loading-01"} {...others} />);
}

export default Component;
