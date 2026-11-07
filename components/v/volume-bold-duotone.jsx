import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxiyspb3j.css';
import '../../css/u/ub_apgbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wxiyspb3j"/><path class="ub_apgbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-bold-duotone"} {...others} />);
}

export default Component;
