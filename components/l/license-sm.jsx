import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgj_o_0ra.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="bgj_o_0ra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:license-sm"} {...others} />);
}

export default Component;
