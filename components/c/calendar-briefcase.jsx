import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o053b3bvz.css';
import '../../css/b/bps76ebgq.css';
import '../../css/f/fw1xawbhh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o053b3bvz"/><path class="bps76ebgq"/><path class="fw1xawbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:calendar-briefcase"} {...others} />);
}

export default Component;
