import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_yo8lb1d.css';
import '../../css/b/bktm07box.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b_yo8lb1d"/><path class="bktm07box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-cross-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
