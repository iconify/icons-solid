import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a92d54b2y.css';
import '../../css/h/hubseccej.css';
import '../../css/v/vl5abyl6q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a92d54b2y"/><path class="hubseccej"/><path class="vl5abyl6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-down-48"} {...others} />);
}

export default Component;
