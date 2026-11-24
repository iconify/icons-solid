import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd3tyqb5z.css';
import '../../css/t/t_ven65to.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bd3tyqb5z"/><path class="t_ven65to"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:spline-pointer-filled"} {...others} />);
}

export default Component;
