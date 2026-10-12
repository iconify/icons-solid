import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xco31rbaj.css';
import '../../css/f/f_0-3nbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xco31rbaj"/><path class="f_0-3nbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:house-filled"} {...others} />);
}

export default Component;
