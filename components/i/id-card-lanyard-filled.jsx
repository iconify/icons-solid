import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poxj9vssi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="poxj9vssi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:id-card-lanyard-filled"} {...others} />);
}

export default Component;
