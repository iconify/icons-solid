import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn2gtrrvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xn2gtrrvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-minimalistic-outline"} {...others} />);
}

export default Component;
