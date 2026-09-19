import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad_rmyb6z.css';
import '../../css/f/f-7sbkbnc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ad_rmyb6z"/><path class="f-7sbkbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:action-usage"} {...others} />);
}

export default Component;
