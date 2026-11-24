import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8jmy1b5l.css';
import '../../css/u/ur5d4xvrj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y8jmy1b5l"/><path class="ur5d4xvrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:route-off-filled"} {...others} />);
}

export default Component;
