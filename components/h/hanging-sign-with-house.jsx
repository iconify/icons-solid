import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4puocchg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z4puocchg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hanging-sign-with-house"} {...others} />);
}

export default Component;
