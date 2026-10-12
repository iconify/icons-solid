import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn3ycljxj.css';
import '../../css/l/lfs1rybvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xn3ycljxj"/><path class="lfs1rybvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bottle-wine-filled"} {...others} />);
}

export default Component;
