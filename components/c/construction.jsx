import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/w/wbmebo.css';
import '../../css/x/xww8sl.css';
import '../../css/e/eq1s0x.css';
import '../../css/u/uew7ro.css';
import '../../css/j/jgfkix.css';
import '../../css/s/so-from-46.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa-o7h taf2xz wbmebo"/><path class="qa-o7h taf2xz xww8sl"/><path class="eq1s0x qa-o7h"/><path class="qa-o7h uew7ro"/><path class="jgfkix qa-o7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:construction"} {...others} />);
}

export default Component;
