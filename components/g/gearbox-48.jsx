import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwnut8bui.css';
import '../../css/t/tag_xcyrt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xwnut8bui"/><path class="tag_xcyrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gearbox-48"} {...others} />);
}

export default Component;
