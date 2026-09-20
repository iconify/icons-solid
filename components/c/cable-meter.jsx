import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpvwby7ij.css';
import '../../css/t/tq2qnvbug.css';
import '../../css/k/k-njt2b4a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lpvwby7ij"/><path class="tq2qnvbug"/><path class="k-njt2b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:cable-meter"} {...others} />);
}

export default Component;
