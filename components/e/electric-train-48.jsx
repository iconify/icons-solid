import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywc2g1byu.css';
import '../../css/i/i4242jg8r.css';
import '../../css/t/tnw7ywizw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ywc2g1byu"/><path class="i4242jg8r"/><path class="tnw7ywizw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-train-48"} {...others} />);
}

export default Component;
