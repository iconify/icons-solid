import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/k7v6wxxvt.css';
import '../../css/i/i2ecl6b1j.css';
import '../../css/t/t4wdc2soy.css';
import '../../css/x/x0kc_d1bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="k7v6wxxvt"/><path class="i2ecl6b1j"/><path class="t4wdc2soy"/><path class="x0kc_d1bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:new-file"} {...others} />);
}

export default Component;
