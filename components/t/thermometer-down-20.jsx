import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6zve7bwi.css';
import '../../css/d/dgtzafb0o.css';
import '../../css/y/y81j8fbuw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x6zve7bwi"/><path class="dgtzafb0o"/><path class="y81j8fbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-down-20"} {...others} />);
}

export default Component;
