import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqs9-mufr.css';
import '../../css/v/vs04vpd1q.css';
import '../../css/f/f2k3b6b_y.css';
import '../../css/g/g2clxsbza.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="bqs9-mufr"/><path class="vs04vpd1q"/><path class="f2k3b6b_y"/><path class="g2clxsbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:employee-group-line"} {...others} />);
}

export default Component;
