import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8_timb4b.css';
import '../../css/n/nqwt54z4d.css';
import '../../css/c/cqy8vydfp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c8_timb4b"/><rect class="nqwt54z4d"/><path class="cqy8vydfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cabin-care-alert"} {...others} />);
}

export default Component;
