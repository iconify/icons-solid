import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf-ilj9mk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wf-ilj9mk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:smartphone"} {...others} />);
}

export default Component;
