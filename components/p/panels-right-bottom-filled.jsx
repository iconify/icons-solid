import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gch9l5uyh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gch9l5uyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:panels-right-bottom-filled"} {...others} />);
}

export default Component;
