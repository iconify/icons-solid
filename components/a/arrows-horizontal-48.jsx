import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmb21zcef.css';
import '../../css/a/aw0qt-2do.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gmb21zcef"/><path class="aw0qt-2do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrows-horizontal-48"} {...others} />);
}

export default Component;
