import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpaz5wbyo.css';
import '../../css/g/gzgo2kxbo.css';
import '../../css/b/bvp6t7ksm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qpaz5wbyo"/><path class="gzgo2kxbo"/><path class="bvp6t7ksm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chassis-ground-20"} {...others} />);
}

export default Component;
