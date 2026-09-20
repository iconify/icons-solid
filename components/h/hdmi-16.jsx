import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpr1pgalx.css';
import '../../css/o/ov5vkel-f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kpr1pgalx"/><path clip-rule="evenodd" class="ov5vkel-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:hdmi-16"} {...others} />);
}

export default Component;
