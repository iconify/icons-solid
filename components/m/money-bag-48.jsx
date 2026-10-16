import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdt3zcvtz.css';
import '../../css/s/srn-1hkgh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hdt3zcvtz"/><path class="srn-1hkgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:money-bag-48"} {...others} />);
}

export default Component;
