import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsk2a6bxc.css';
import '../../css/m/mj22p1w_u.css';
import '../../css/r/rxdhtxbdw.css';
import '../../css/i/iyuamcbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wsk2a6bxc"/><path class="mj22p1w_u"/><path class="rxdhtxbdw"/><path class="iyuamcbxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pen-types-flat"} {...others} />);
}

export default Component;
