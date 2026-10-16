import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc0nz7arf.css';
import '../../css/f/fu6k9ir6c.css';
import '../../css/g/g29n01b-u.css';
import '../../css/y/y4eq8bc3m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rc0nz7arf"/><path class="fu6k9ir6c"/><path class="g29n01b-u"/><path class="y4eq8bc3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-heater-20"} {...others} />);
}

export default Component;
