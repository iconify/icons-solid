import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfcrsdfef.css';
import '../../css/o/ot8dm5bxm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dfcrsdfef"/><path class="ot8dm5bxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pill-bottle-filled"} {...others} />);
}

export default Component;
