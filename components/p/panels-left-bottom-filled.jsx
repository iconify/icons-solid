import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y12mmacdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y12mmacdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:panels-left-bottom-filled"} {...others} />);
}

export default Component;
