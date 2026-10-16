import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnwntobhb.css';
import '../../css/y/yd8awt77v.css';
import '../../css/d/ds8d00hgb.css';
import '../../css/d/dmbbndb5p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hnwntobhb"/><path class="yd8awt77v"/><path class="ds8d00hgb"/><path class="dmbbndb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-heater-20-bold"} {...others} />);
}

export default Component;
