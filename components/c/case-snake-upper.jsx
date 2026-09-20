import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5le0mbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5le0mbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:case-snake-upper"} {...others} />);
}

export default Component;
