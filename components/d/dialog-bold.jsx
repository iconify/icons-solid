import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-a8ibbxe.css';
import '../../css/y/y2bl_ob4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-a8ibbxe"/><path clip-rule="evenodd" class="y2bl_ob4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-bold"} {...others} />);
}

export default Component;
