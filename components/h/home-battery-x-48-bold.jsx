import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6ku4ac1f.css';
import '../../css/e/e2mg85laq.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x6ku4ac1f"/><path class="e2mg85laq"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:home-battery-x-48-bold"} {...others} />);
}

export default Component;
