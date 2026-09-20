import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz4b90hlv.css';
import '../../css/h/hltafxbrk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="oz4b90hlv"/><path class="hltafxbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:anger-symbol"} {...others} />);
}

export default Component;
