import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygdzmab_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ygdzmab_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bluetooth-connected-line"} {...others} />);
}

export default Component;
