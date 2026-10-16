import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob4lgh48c.css';
import '../../css/k/k5v_esb1a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ob4lgh48c"/><path class="k5v_esb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-joint-48-bold"} {...others} />);
}

export default Component;
