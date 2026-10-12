import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j95p8463r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j95p8463r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:eye-dashed-filled"} {...others} />);
}

export default Component;
