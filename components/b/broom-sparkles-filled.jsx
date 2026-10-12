import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb7tk6biy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lb7tk6biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:broom-sparkles-filled"} {...others} />);
}

export default Component;
