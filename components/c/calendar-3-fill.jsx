import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5ae-tbgb.css';
import '../../css/q/qeijpobfe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k5ae-tbgb"/><path class="qeijpobfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:calendar-3-fill"} {...others} />);
}

export default Component;
