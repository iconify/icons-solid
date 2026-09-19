import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8qw21b7i.css';
import '../../css/d/dpo67b6zm.css';
import '../../css/z/z8_5hvbcj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l8qw21b7i"/><path class="dpo67b6zm"/><path class="z8_5hvbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:color-filter"} {...others} />);
}

export default Component;
