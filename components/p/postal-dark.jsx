import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqfxqwb8y.css';
import '../../css/r/r1on95b0w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jqfxqwb8y"/><path class="r1on95b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:postal-dark"} {...others} />);
}

export default Component;
