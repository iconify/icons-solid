import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgbg3kb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dgbg3kb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:accumulator-outline"} {...others} />);
}

export default Component;
