import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2lo1actl.css';
import '../../css/u/utw1vrodv.css';
import '../../css/y/y016e8ire.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d2lo1actl"/><path class="utw1vrodv"/><path class="y016e8ire"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-drug-medicine-water"} {...others} />);
}

export default Component;
