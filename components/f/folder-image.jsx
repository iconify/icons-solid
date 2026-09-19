import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/teuuz-bef.css';
import '../../css/s/sl3l8abxy.css';
import '../../css/n/nb0q2vbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="teuuz-bef"/><path class="sl3l8abxy"/><path class="nb0q2vbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-image"} {...others} />);
}

export default Component;
