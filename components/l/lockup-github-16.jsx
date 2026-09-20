import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo62x3btp.css';
import '../../css/g/g8ck1ubmr.css';
import '../../css/g/gktvaxxcy.css';

const viewBox = {"width":68,"height":16};
const content = `<path class="qo62x3btp"/><path class="g8ck1ubmr"/><path class="gktvaxxcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:lockup-github-16"} {...others} />);
}

export default Component;
