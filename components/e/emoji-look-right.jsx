import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x_aaufbbi.css';
import '../../css/u/um_iy8qqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x_aaufbbi"/><path class="um_iy8qqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-look-right"} {...others} />);
}

export default Component;
