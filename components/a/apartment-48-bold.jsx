import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpmgkheit.css';
import '../../css/r/rw5av3bvc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hpmgkheit"/><path class="rw5av3bvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:apartment-48-bold"} {...others} />);
}

export default Component;
