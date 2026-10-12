import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/y/y_jdkab7z.css';
import '../../css/d/downlpbuh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="y_jdkab7z"/><path class="downlpbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-circle-right-48"} {...others} />);
}

export default Component;
