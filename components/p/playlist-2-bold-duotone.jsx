import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1_y72bar.css';
import '../../css/b/b-ei31biy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n1_y72bar"/><path class="b-ei31biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-2-bold-duotone"} {...others} />);
}

export default Component;
