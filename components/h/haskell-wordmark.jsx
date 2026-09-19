import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4uddx0jd.css';
import '../../css/v/vqxzppjjv.css';
import '../../css/s/sjhg1622m.css';
import '../../css/e/e4ilxsk1q.css';
import '../../css/x/xfb9unbeh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u4uddx0jd"/><path class="vqxzppjjv"/><path class="sjhg1622m"/><path class="e4ilxsk1q"/><path class="xfb9unbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:haskell-wordmark"} {...others} />);
}

export default Component;
