import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/guzf4q3zb.css';
import '../../css/x/xxqi1k1ru.css';
import '../../css/m/m8ou24kwg.css';
import '../../css/s/svi4xkbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="guzf4q3zb"/><path class="xxqi1k1ru"/><path class="m8ou24kwg"/><path class="svi4xkbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:bower-logo"} {...others} />);
}

export default Component;
