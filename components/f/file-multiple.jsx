import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vawpk_1bq.css';
import '../../css/k/kvjhaxmvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vawpk_1bq"/><path class="kvjhaxmvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:file-multiple"} {...others} />);
}

export default Component;
