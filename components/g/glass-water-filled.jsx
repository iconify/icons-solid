import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6363ublj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f6363ublj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:glass-water-filled"} {...others} />);
}

export default Component;
