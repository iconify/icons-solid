import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygif-0zjx.css';
import '../../css/v/v5gp01b5h.css';
import '../../css/l/l4t-_sbed.css';
import '../../css/g/gtb-nw37z.css';
import '../../css/u/uq8obbc2d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ygif-0zjx"/><ellipse class="v5gp01b5h"/><ellipse class="l4t-_sbed"/><ellipse class="gtb-nw37z"/><ellipse class="uq8obbc2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:paw-sharp"} {...others} />);
}

export default Component;
