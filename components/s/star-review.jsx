import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbv6tsbiz.css';
import '../../css/w/wtstr4z9r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hbv6tsbiz"/><path class="wtstr4z9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:star-review"} {...others} />);
}

export default Component;
