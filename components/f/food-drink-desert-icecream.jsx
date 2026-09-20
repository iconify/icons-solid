import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyx_a2aii.css';
import '../../css/k/kqo6pkb1q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eyx_a2aii"/><path class="kqo6pkb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-desert-icecream"} {...others} />);
}

export default Component;
