import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxz8lnubg.css';
import '../../css/e/eo0cog95z.css';
import '../../css/w/w8t6fkc8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxz8lnubg"/><path clip-rule="evenodd" class="eo0cog95z"/><path clip-rule="evenodd" class="w8t6fkc8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-bold-duotone"} {...others} />);
}

export default Component;
