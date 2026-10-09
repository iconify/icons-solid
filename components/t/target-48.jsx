import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/i/i2a3t5bgb.css';
import '../../css/i/i5i-ymejz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="i2a3t5bgb"/><path class="i5i-ymejz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:target-48"} {...others} />);
}

export default Component;
