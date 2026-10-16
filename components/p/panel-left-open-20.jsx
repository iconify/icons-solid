import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgiazbbrf.css';
import '../../css/s/sf7om5bde.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qgiazbbrf"/><path class="sf7om5bde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-left-open-20"} {...others} />);
}

export default Component;
