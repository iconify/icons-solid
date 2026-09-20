import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3l1kjaet.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="x3l1kjaet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:assistive-listening-system"} {...others} />);
}

export default Component;
