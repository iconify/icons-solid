import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b7plcyd2c.css';
import '../../css/s/sarjvl23p.css';
import '../../css/e/ebjelebbq.css';
import '../../css/r/r96ug_ban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b7plcyd2c"/><path class="sarjvl23p"/><rect class="ebjelebbq"/><path class="r96ug_ban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-availability"} {...others} />);
}

export default Component;
