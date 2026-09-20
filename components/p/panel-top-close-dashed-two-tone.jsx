import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rlqigwbqk.css';
import '../../css/k/kodnftbvm.css';
import '../../css/x/xgkv2fbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rlqigwbqk"/><path class="kodnftbvm"/><path class="xgkv2fbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-top-close-dashed-two-tone"} {...others} />);
}

export default Component;
