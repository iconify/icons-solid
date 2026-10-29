import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulvjd6cog.css';
import '../../css/f/fz5zim2di.css';
import '../../css/g/gjscvjokx.css';
import '../../css/z/z9azt8bks.css';
import '../../css/y/yvzd1sbqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulvjd6cog wm-shadow"/><path class="fz5zim2di wm-k"/><path class="gjscvjokx wm-k"/><path class="wm-a z9azt8bks"/><path class="wm-a yvzd1sbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:strikethrough"} {...others} />);
}

export default Component;
