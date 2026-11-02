import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/modzxhp8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="modzxhp8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:capsule-line"} {...others} />);
}

export default Component;
