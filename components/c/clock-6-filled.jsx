import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dex2nurdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dex2nurdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clock-6-filled"} {...others} />);
}

export default Component;
