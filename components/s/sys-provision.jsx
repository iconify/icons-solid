import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcd46obdx.css';
import '../../css/j/jdsu42b0b.css';
import '../../css/e/exuhjy5ee.css';
import '../../css/b/b0o9zobuw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vcd46obdx"/><circle class="jdsu42b0b"/><path class="exuhjy5ee"/><path class="b0o9zobuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:sys-provision"} {...others} />);
}

export default Component;
