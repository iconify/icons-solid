import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgqhi0q5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cgqhi0q5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:face-angry-filled"} {...others} />);
}

export default Component;
