import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtupobchd.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i-3j45wxb.css';
import '../../css/y/y-53s9bls.css';
import '../../css/l/lhv-0vz3l.css';
import '../../css/j/j1g68llfx.css';
import '../../css/a/a32itabsr.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGHk9UQddQ"><path class="qtupobchd"/></clipPath></defs><g clip-path="url(#SVGHk9UQddQ)" transform="translate(-120 -52.4)scale(1.1014)" class="d2kvgvbvc"><path class="i-3j45wxb"/><path class="y-53s9bls"/><path class="lhv-0vz3l"/><path class="j1g68llfx"/><path class="a32itabsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ag-1x1"} {...others} />);
}

export default Component;
