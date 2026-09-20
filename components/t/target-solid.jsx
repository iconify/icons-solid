import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0yw49byf.css';
import '../../css/u/u-9mz-bzz.css';
import '../../css/f/fydwzq94k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f0yw49byf"/><path clip-rule="evenodd" class="u-9mz-bzz"/><path clip-rule="evenodd" class="fydwzq94k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:target-solid"} {...others} />);
}

export default Component;
