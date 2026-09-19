import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az_vxbc1n.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="az_vxbc1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:list-bullet-indent"} {...others} />);
}

export default Component;
