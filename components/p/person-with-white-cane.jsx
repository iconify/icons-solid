import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpn7bkbdx.css';
import '../../css/j/jzqgldrtw.css';
import '../../css/r/r4u10iveo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bpn7bkbdx"/><path class="jzqgldrtw"/><path class="r4u10iveo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-with-white-cane"} {...others} />);
}

export default Component;
