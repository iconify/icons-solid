import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f70j8yk4i.css';
import '../../css/m/mytw5ubob.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f70j8yk4i"/><path class="mytw5ubob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-bolt-48"} {...others} />);
}

export default Component;
