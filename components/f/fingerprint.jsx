import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/puo6m7bvm.css';
import '../../css/b/bmiu8w0sc.css';
import '../../css/c/cmsqj627t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="puo6m7bvm"/><path class="bmiu8w0sc"/><path class="cmsqj627t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fingerprint"} {...others} />);
}

export default Component;
