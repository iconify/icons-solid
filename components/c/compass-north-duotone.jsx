import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmwsuuafu.css';
import '../../css/i/idioxzbvi.css';
import '../../css/r/rqxdjtb9e.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGBcAkBbbn"><g class="ft5dv1b6b"><path class="gmwsuuafu"/><path class="idioxzbvi"/><path class="rqxdjtb9e"/></g></mask></defs><path mask="url(#SVGBcAkBbbn)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compass-north-duotone"} {...others} />);
}

export default Component;
