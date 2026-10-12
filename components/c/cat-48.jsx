import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozo7glmpq.css';
import '../../css/s/svf74obkf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ozo7glmpq"/><path class="svf74obkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cat-48"} {...others} />);
}

export default Component;
