import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgd2t-wgz.css';
import '../../css/y/yvwmwi2bl.css';
import '../../css/l/lgg4do2ns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wgd2t-wgz"/><path class="yvwmwi2bl"/><path class="lgg4do2ns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:user-marked"} {...others} />);
}

export default Component;
