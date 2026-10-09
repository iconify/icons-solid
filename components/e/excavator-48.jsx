import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbhfztbdk.css';
import '../../css/s/s3cdewurv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rbhfztbdk"/><path class="s3cdewurv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:excavator-48"} {...others} />);
}

export default Component;
