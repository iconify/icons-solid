import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhq8k4w1w.css';
import '../../css/o/ojgsrdbfo.css';
import '../../css/m/mibj8nzcw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rhq8k4w1w"/><path class="ojgsrdbfo"/><path class="mibj8nzcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stadium-20"} {...others} />);
}

export default Component;
