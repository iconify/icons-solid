import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em933ob1r.css';
import '../../css/p/py4nxfbnh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="em933ob1r"/><path class="py4nxfbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bolt-check-48"} {...others} />);
}

export default Component;
