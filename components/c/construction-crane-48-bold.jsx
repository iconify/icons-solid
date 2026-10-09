import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8yec1dno.css';
import '../../css/c/cntw57bva.css';
import '../../css/v/vo5xihh_v.css';
import '../../css/d/dtp5yccxt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c8yec1dno"/><path class="cntw57bva"/><path class="vo5xihh_v"/><path class="dtp5yccxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:construction-crane-48-bold"} {...others} />);
}

export default Component;
