import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/b/bp5_whbrl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="bp5_whbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:circle-dot-48"} {...others} />);
}

export default Component;
