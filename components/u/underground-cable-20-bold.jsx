import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faahkei5l.css';
import '../../css/l/lfriz8pwt.css';
import '../../css/m/m-8ppixnq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="faahkei5l"/><path class="lfriz8pwt"/><path class="m-8ppixnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:underground-cable-20-bold"} {...others} />);
}

export default Component;
