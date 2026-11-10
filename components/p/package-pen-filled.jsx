import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dktvvbced.css';
import '../../css/m/msy_44tas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dktvvbced"/><path clip-rule="evenodd" class="msy_44tas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:package-pen-filled"} {...others} />);
}

export default Component;
