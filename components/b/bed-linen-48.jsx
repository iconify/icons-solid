import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk2co3bdu.css';
import '../../css/p/ph74n2b1g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fk2co3bdu"/><path class="ph74n2b1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bed-linen-48"} {...others} />);
}

export default Component;
