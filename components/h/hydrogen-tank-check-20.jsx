import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm-e-5b3l.css';
import '../../css/n/noq31yu3i.css';
import '../../css/c/c4jqm5b5v.css';
import '../../css/r/rhwrewb6n.css';
import '../../css/q/q9z_cedxn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dm-e-5b3l"/><path class="noq31yu3i"/><path class="c4jqm5b5v"/><path class="rhwrewb6n"/><path class="q9z_cedxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-tank-check-20"} {...others} />);
}

export default Component;
