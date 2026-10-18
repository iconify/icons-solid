import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cawzwbo3e.css';
import '../../css/o/o2iujpb6b.css';
import '../../css/f/ftz9zcbou.css';
import '../../css/h/h8v-jytyk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cawzwbo3e"/><path class="o2iujpb6b"/><path class="ftz9zcbou"/><path class="h8v-jytyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:net-metering-20"} {...others} />);
}

export default Component;
