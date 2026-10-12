import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlijh8b1j.css';
import '../../css/z/z-s_bkbrl.css';
import '../../css/n/n1_wm9fxc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zlijh8b1j"/><path class="z-s_bkbrl"/><path class="n1_wm9fxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clock-arrow-right-stroke-20"} {...others} />);
}

export default Component;
