import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm92yt0_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hm92yt0_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:body-shape-minimalistic-outline"} {...others} />);
}

export default Component;
