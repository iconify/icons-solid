import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfuhywbmz.css';
import '../../css/c/ckv8-4w9v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jfuhywbmz"/><path clip-rule="evenodd" class="ckv8-4w9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-time-2"} {...others} />);
}

export default Component;
