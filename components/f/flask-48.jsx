import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdwcq3bta.css';
import '../../css/s/s865abbii.css';
import '../../css/a/ame6s9x0w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bdwcq3bta"/><path class="s865abbii"/><path class="ame6s9x0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flask-48"} {...others} />);
}

export default Component;
