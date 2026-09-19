import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnn_acbmc.css';
import '../../css/l/lrp6bibkl.css';
import '../../css/c/c-9udcc7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bnn_acbmc"/><path class="lrp6bibkl"/><path class="c-9udcc7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:analytics-hub"} {...others} />);
}

export default Component;
