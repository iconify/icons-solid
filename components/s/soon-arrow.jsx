import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv-j_tzgn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pv-j_tzgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:soon-arrow"} {...others} />);
}

export default Component;
