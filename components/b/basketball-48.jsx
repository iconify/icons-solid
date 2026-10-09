import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/e/exdfc7bwm.css';
import '../../css/g/g81yme2dd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="exdfc7bwm"/><path class="g81yme2dd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:basketball-48"} {...others} />);
}

export default Component;
