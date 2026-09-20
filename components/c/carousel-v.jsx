import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwa3mixdc.css';
import '../../css/a/a3mjwzvtg.css';
import '../../css/v/vi6r83tsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uwa3mixdc"/><path clip-rule="evenodd" class="a3mjwzvtg"/><path class="vi6r83tsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:carousel-v"} {...others} />);
}

export default Component;
