import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc0x6ebqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pc0x6ebqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:lamp-wall-down-fill"} {...others} />);
}

export default Component;
