import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7k5gibth.css';
import '../../css/k/kjznt1r2d.css';
import '../../css/o/o-y2m3oef.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d7k5gibth"/><path class="kjznt1r2d"/><path class="o-y2m3oef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:fitness-sharp"} {...others} />);
}

export default Component;
