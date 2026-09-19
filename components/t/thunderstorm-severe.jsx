import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v92du4b9z.css';
import '../../css/l/l7b_ym2oe.css';
import '../../css/q/qw0bgzezr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v92du4b9z"/><path class="l7b_ym2oe"/><path class="qw0bgzezr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:thunderstorm-severe"} {...others} />);
}

export default Component;
