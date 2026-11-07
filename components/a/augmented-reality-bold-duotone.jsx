import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/a/a-44o5enj.css';
import '../../css/w/wn9x1iaaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path clip-rule="evenodd" class="a-44o5enj"/><path clip-rule="evenodd" class="wn9x1iaaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:augmented-reality-bold-duotone"} {...others} />);
}

export default Component;
