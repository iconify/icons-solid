import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvziljb5x.css';
import '../../css/s/sx6wue_0b.css';
import '../../css/a/a37x_vbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvziljb5x"/><path class="sx6wue_0b"/><path class="a37x_vbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:discover"} {...others} />);
}

export default Component;
