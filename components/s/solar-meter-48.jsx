import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw53-sbdu.css';
import '../../css/b/b_6nlsbae.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lw53-sbdu"/><path class="b_6nlsbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-meter-48"} {...others} />);
}

export default Component;
