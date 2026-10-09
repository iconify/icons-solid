import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om_2m0e4d.css';
import '../../css/b/bg9q4obqt.css';
import '../../css/s/see0y-btr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="om_2m0e4d"/><path class="bg9q4obqt"/><path class="see0y-btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-48-bold"} {...others} />);
}

export default Component;
