import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcruq_b4u.css';
import '../../css/l/l3mikie3t.css';
import '../../css/v/vnl18uiss.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bcruq_b4u"/><path class="l3mikie3t"/><path class="vnl18uiss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-48"} {...others} />);
}

export default Component;
