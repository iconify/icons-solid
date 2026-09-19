import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/m/m1lt5n8tk.css';
import '../../css/c/cq-p70qeo.css';
import '../../css/c/cr86h_b7s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="m1lt5n8tk"/><path class="cq-p70qeo"/><path class="cr86h_b7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:turn-off-bluetooth"} {...others} />);
}

export default Component;
