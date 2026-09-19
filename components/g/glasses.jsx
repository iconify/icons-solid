import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw-q3pb-z.css';
import '../../css/u/utb2ysxhh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cw-q3pb-z"/><path class="utb2ysxhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:glasses"} {...others} />);
}

export default Component;
