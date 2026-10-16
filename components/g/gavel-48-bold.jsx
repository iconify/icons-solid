import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir7tugprl.css';
import '../../css/t/tnnq4zbbd.css';
import '../../css/o/o6n1tfudy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ir7tugprl"/><path class="tnnq4zbbd"/><path class="o6n1tfudy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gavel-48-bold"} {...others} />);
}

export default Component;
