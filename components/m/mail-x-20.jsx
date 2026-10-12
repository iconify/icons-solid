import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndihgzbwa.css';
import '../../css/a/awn7h3b2c.css';
import '../../css/e/ed4mxccbx.css';
import '../../css/e/eqdr87b3l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ndihgzbwa"/><path class="awn7h3b2c"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-x-20"} {...others} />);
}

export default Component;
