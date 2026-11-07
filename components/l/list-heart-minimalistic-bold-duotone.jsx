import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmnoaub3f.css';
import '../../css/y/y4c08ncxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bmnoaub3f"/><path class="y4c08ncxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-heart-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
