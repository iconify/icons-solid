import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt_6_ccuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pt_6_ccuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:theater-filled"} {...others} />);
}

export default Component;
