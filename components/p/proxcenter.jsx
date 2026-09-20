import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vs16rbccl.css';
import '../../css/t/t9suffddk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vs16rbccl"/><path class="t9suffddk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proxcenter"} {...others} />);
}

export default Component;
