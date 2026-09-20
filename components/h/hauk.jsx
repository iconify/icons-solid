import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrxl77bmr.css';
import '../../css/q/qc_-83mex.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hrxl77bmr"/><path class="qc_-83mex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hauk"} {...others} />);
}

export default Component;
