import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htffp3b5a.css';
import '../../css/q/qu-izxe2j.css';
import '../../css/f/fsc5e1bho.css';
import '../../css/f/fqrraspid.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="htffp3b5a"/><path class="qu-izxe2j"/><path class="fsc5e1bho"/><path class="fqrraspid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-car-20"} {...others} />);
}

export default Component;
