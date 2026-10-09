import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry85_ib5t.css';
import '../../css/g/g7joh4_lt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ry85_ib5t"/><path class="g7joh4_lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flag-48"} {...others} />);
}

export default Component;
