import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erzf03bmv.css';
import '../../css/t/t4s1m-ked.css';
import '../../css/w/w_7yn1aap.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erzf03bmv"/><path class="t4s1m-ked"/><path class="w_7yn1aap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gb-eng-1x1"} {...others} />);
}

export default Component;
