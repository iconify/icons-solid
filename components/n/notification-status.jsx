import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bsb_hgbdv.css';
import '../../css/e/e4gcy2bhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bsb_hgbdv"/><path class="e4gcy2bhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:notification-status"} {...others} />);
}

export default Component;
